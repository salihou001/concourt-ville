import { ChangeDetectionStrategy, Component, OnInit, Renderer2, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';


// gsap.registerPlugin(ScrollTrigger);


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {

}