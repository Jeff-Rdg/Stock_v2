import { Route } from '@angular/router';
import { PrivateComponent } from './private.component';
import { HomeComponent } from '../../../modules/home/home.component';
import { ProductComponent } from '../../../modules/product/product.component';

export const PrivateRoute: Route = {
  path: '',
  component: PrivateComponent,
  children: [
    {
      path: '',
      component: HomeComponent,
      data: { title: 'Início', icon: 'home' },
    },
    {
      path: 'register',
      data: { title: 'Cadastros', icon: 'edit', hasChildren: true },
      children: [
        {
          path: 'product',
          component: ProductComponent,
          data: { title: 'Produto', icon: 'storefront' },
        },
      ],
    },
  ],
};
