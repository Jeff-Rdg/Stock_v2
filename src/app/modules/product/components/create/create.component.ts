import { Component } from '@angular/core';
import { CardComponent } from '../../../../shared/components/card/card.component';
import { ProductService } from '../../services/product.service';
import { MatButtonModule } from '@angular/material/button';
import { AlertService } from '../../../../shared/services/alert.service';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { ProductModel } from '../../model/product.model';
import { Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';

import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-create',
  imports: [
    CardComponent,
    MatButtonModule,
    ButtonComponent,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
  ],
  standalone: true,
  templateUrl: './create.component.html',
  styleUrl: './create.component.scss',
})
export class CreateProductComponent {
  product: ProductModel = {
    name: '',
    price: undefined,
  };
  constructor(
    private service: ProductService,
    private alert: AlertService,
    private router: Router,
  ) {}

  async createProduct() {
    try {
      const response = await lastValueFrom(this.service.create(this.product));
      this.alert.showMessage('Produto criado com sucesso!');
      this.router.navigateByUrl('/register/product');
    } catch (err) {
      console.log(err);
      this.alert.showMessage('Houve um erro inesperado!');
    }
  }

  cancel(): void {
    this.router.navigateByUrl('/register/product');
  }
}
