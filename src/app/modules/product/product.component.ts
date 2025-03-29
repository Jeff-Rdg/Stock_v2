import { Component } from '@angular/core';
import { CardComponent } from '../../shared/components/card/card.component';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { ButtonComponent } from '../../shared/components/button/button.component';

@Component({
  selector: 'app-product',
  imports: [CardComponent, MatButtonModule, ButtonComponent],
  standalone: true,
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
})
export class ProductComponent {
  constructor(private router: Router) {}
  navigateToProductCreate(): void {
    this.router.navigateByUrl('/register/product/create');
  }
}
