import { Component } from '@angular/core';
import { MenuComponent } from "../../shared/components/menu/menu.component";
import { NavBarComponent } from "../../shared/components/nav-bar/nav-bar.component";
import { FooterComponent } from "../../shared/components/footer/footer.component";

@Component({
  selector: 'app-hotels',
  standalone: true,
  imports: [MenuComponent, NavBarComponent, FooterComponent],
  templateUrl: './hotels.component.html',
  styleUrl: './hotels.component.scss'
})
export class HotelsComponent {

}
