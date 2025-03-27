import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { NavComponent } from '../../components/nav/nav.component';

@Component({
  selector: 'app-public',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, NavComponent],
  templateUrl: './public.component.html',
  styleUrl: './public.component.scss',
})
export class PublicComponent {
  name = 'Jefferson Rodrigues';
}
