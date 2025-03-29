import { Component } from '@angular/core';
import { CardComponent } from '../../../../shared/components/card/card.component';
import { ProductService } from '../../services/product.service';
import { MatButtonModule } from '@angular/material/button';
import { AlertService } from '../../../../shared/services/alert.service';
import { ButtonComponent } from '../../../../shared/components/button/button.component';

@Component({
  selector: 'app-create',
  imports: [CardComponent, MatButtonModule, ButtonComponent],
  standalone: true,
  templateUrl: './create.component.html',
  styleUrl: './create.component.scss',
})
export class CreateProductComponent {
  constructor(
    private service: ProductService,
    private alert: AlertService,
  ) {}

  showMessage(): void {
    this.alert.showMessage('deu certo caraio');
  }
}
