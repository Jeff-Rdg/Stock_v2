import { Component } from '@angular/core';
import { MatToolbar } from '@angular/material/toolbar';

@Component({
  selector: 'app-footer',
  imports: [MatToolbar],
  templateUrl: './footer.component.html',
  standalone: true,
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  name: string = 'Jefferson Rodrigues';
}
