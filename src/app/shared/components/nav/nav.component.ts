import { Component, inject, OnInit, signal } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import {
  NavigationEnd,
  Route,
  Router,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
} from '@angular/router';
import { PrivateRoute } from '../../layout/private/private.routes';
import { NgForOf, NgIf } from '@angular/common';
import { filter } from 'rxjs';

interface NavItem {
  label: string;
  icon: string;
  route?: string;
  children?: NavItem[];
  isExpanded?: boolean;
}

@Component({
  selector: 'app-nav',
  imports: [
    MatSidenavModule,
    MatListModule,
    RouterOutlet,
    NgForOf,
    RouterLink,
    RouterLinkActive,
    NgIf,
  ],
  standalone: true,
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss',
})
export class NavComponent implements OnInit {
  private router = inject(Router);
  navItems = signal<NavItem[]>([]);

  ngOnInit() {
    this.navItems.set(this.buildNavItems(PrivateRoute.children || []));

    this.updateExpandedState();
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => this.updateExpandedState());
  }

  constructor() {
    const routerConfig = this.router.config.find((r) => r.path === '');
    if (routerConfig?.children) {
      this.navItems.set(this.buildNavItems(routerConfig.children));
    }
  }

  buildNavItems(routes: Route[], parentPath: string = ''): NavItem[] {
    return routes
      .filter((route) => route.data?.['title'] && route?.data?.['icon'])
      .map((route) => {
        const isRootRoute = route.path === '';
        const fullPath = isRootRoute
          ? '/'
          : `${parentPath}/${route.path}`.replace('//', '/');

        const navItem: NavItem = {
          label: route.data!['title'],
          icon: route.data!['icon'],
          route: isRootRoute ? '/' : fullPath,
          isExpanded: false,
        };

        if (route.children) {
          navItem.children = this.buildNavItems(route.children, fullPath);
        }

        return navItem;
      });
  }

  private updateExpandedState() {
    this.navItems.update((items) =>
      items.map((item) => ({
        ...item,
        isExpanded: item.children
          ? item.children.some((child) =>
              this.router.isActive(child.route || '', false),
            )
          : false,
      })),
    );
  }

  toggleItem(item: NavItem) {
    item.isExpanded = !item.isExpanded;
    if (item.isExpanded && !item.route && item.children?.length) {
      this.router.navigateByUrl(item.children[0].route!);
    }
  }

  isActive(url?: string): boolean {
    return url ? this.router.isActive(url, false) : false;
  }

  hasActiveChild(item: NavItem): boolean {
    return item.children?.some((child) => this.isActive(child.route)) ?? false;
  }
}
