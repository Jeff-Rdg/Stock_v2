import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { NavComponent } from '../../components/nav/nav.component';

@Component({
  selector: 'app-private',
  standalone: true,
  imports: [HeaderComponent, NavComponent],
  templateUrl: './private.component.html',
  styleUrl: './private.component.scss',
})
export class PrivateComponent {
  name = 'Jefferson Rodrigues';
}
