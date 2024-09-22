import { Component } from '@angular/core';
import { FooterComponent } from "../../shared/components/footer/footer.component";
import { CardHotelComponent } from "../../shared/components/card-hotel/card-hotel.component";
import { NavBarComponent } from "../../shared/components/nav-bar/nav-bar.component";
import { MenuComponent } from "../../shared/components/menu/menu.component";
import { Hotel } from '../../shared/interface/interface';
import { BlockRestoComponent } from "../../shared/components/block-resto/block-resto.component";


@Component({
  selector: 'app-restaurants',
  standalone: true,
  imports: [FooterComponent, CardHotelComponent, NavBarComponent, MenuComponent, BlockRestoComponent],
  templateUrl: './restaurants.component.html',
  styleUrl: './restaurants.component.scss'
})
export class RestaurantsComponent {
  listHotels: Hotel[] = [
    {
      id: '1',
      image: 'Rectangle 9 (1)',
      desc: 'Douala Design Hôtel'
    },
    {
      id: '2',
      image: 'Rectangle 9 (2)',
      desc: 'Douala Design Hôtel'
    },
    {
      id: '3',
      image: 'Rectangle 9 (3)',
      desc: 'Douala Design Hôtel'
    },
    {
      id: '4',
      image: 'Rectangle 9 (4)',
      desc: 'Douala Design Hôtel'
    },
    {
      id: '5',
      image: 'Rectangle 9 (5)',
      desc: 'Douala Design Hôtel'
    },
    {
      id: '6',
      image: 'Rectangle 9',
      desc: 'Douala Design Hôtel'
    },
  ];

  newHotels: Hotel[] = [
    {
      id: '1',
      image: 'Rectangle 9',
      desc: 'Douala Design Hôtel'
    },
    {
      id: '2',
      image: 'Rectangle 11',
      desc: 'Douala Design Hôtel'
    },
    {
      id: '3',
      image: 'Rectangle 12',
      desc: 'Douala Design Hôtel'
    },
  ];
}
