import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CardComponent } from '../../shared/components/card/card.component';

@Component({
  selector: 'app-home',
  imports: [MatCardModule, CardComponent],
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
