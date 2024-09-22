import { Component } from '@angular/core';
import { FooterComponent } from "../../shared/components/footer/footer.component";
import { CardHotelComponent } from "../../shared/components/card-hotel/card-hotel.component";
import { NavBarComponent } from "../../shared/components/nav-bar/nav-bar.component";
import { MenuComponent } from "../../shared/components/menu/menu.component";
import { Hotel } from '../../shared/interface/interface';

@Component({
  selector: 'app-restaurants',
  standalone: true,
  imports: [FooterComponent, CardHotelComponent, NavBarComponent, MenuComponent],
  templateUrl: './restaurants.component.html',
  styleUrl: './restaurants.component.scss'
})
export class RestaurantsComponent {
  listHotels: Hotel[] = [
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
    {
      id: '4',
      image: 'Rectangle 9',
      desc: 'Douala Design Hôtel'
    },
    {
      id: '5',
      image: 'Rectangle 11',
      desc: 'Douala Design Hôtel'
    },
    {
      id: '6',
      image: 'Rectangle 12',
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
