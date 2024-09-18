import { Component, input } from '@angular/core';
import gsap from 'gsap';
import { Block } from '../../interface/interface';

@Component({
  selector: 'app-block-card',
  standalone: true,
  imports: [],
  templateUrl: './block-card.component.html',
  styleUrl: './block-card.component.scss'
})
export class BlockCardComponent {
  item = input.required<Block>();
  showBlock(index: any) {
    gsap.to(`#block-${index}`, {
      bottom: 0,
      duration: .3
    })
  }
  hideBlock(index: any) {
    gsap.to(`#block-${index}`, {
      bottom: '-150px',
      duration: .3
    })
  }
}
