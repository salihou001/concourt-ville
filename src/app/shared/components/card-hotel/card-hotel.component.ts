import { Component, input } from '@angular/core';
import { Hotel } from '../../interface/interface';

@Component({
  selector: 'app-card-hotel',
  standalone: true,
  imports: [],
  templateUrl: './card-hotel.component.html',
  styleUrl: './card-hotel.component.scss'
})
export class CardHotelComponent {
  item= input.required<Hotel>();
}
