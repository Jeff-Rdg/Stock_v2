import { Route } from '@angular/router';
import { PublicComponent } from './public.component';

export const PublicRoute: Route = {
  path: '',
  component: PublicComponent,
  children: [],
};
