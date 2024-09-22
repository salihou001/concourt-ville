import { Component, input } from '@angular/core';
import { Hotel } from '../../interface/interface';

@Component({
  selector: 'app-block-resto',
  standalone: true,
  imports: [],
  templateUrl: './block-resto.component.html',
  styleUrl: './block-resto.component.scss'
})
export class BlockRestoComponent {
  item= input.required<Hotel>();
}
