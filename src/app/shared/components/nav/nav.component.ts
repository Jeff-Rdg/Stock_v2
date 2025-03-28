import { Component } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { Route, RouterLink, RouterOutlet } from '@angular/router';
import { PublicRoute } from '../../layout/public/public.routes';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-nav',
  imports: [MatSidenavModule, MatListModule, RouterOutlet, NgForOf, RouterLink],
  standalone: true,
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss',
})
export class NavComponent {
  navItems: {
    label: string;
    route: string;
    icon: string;
  }[] = [];

  constructor() {
    this.getMenuItems(PublicRoute);
  }

  private getMenuItems(route: Route) {
    if (route.children) {
      route.children.forEach((child) => {
        if (child?.data && child.data['title'] && child.data['icon']) {
          this.navItems.push({
            label: child.data['title'],
            route: '/' + child.path,
            icon: child.data['icon'],
          });
        }
      });
    }
  }
}
