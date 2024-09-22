import { BlockRestoComponent } from "../../shared/components/block-resto/block-resto.component";
import { CardHotelComponent } from "../../shared/components/card-hotel/card-hotel.component";
import { NavBarComponent } from "../../shared/components/nav-bar/nav-bar.component";
import { FooterComponent } from "../../shared/components/footer/footer.component";
import { MenuComponent } from "../../shared/components/menu/menu.component";
import { Hotel } from '../../shared/interface/interface';
import { Component } from '@angular/core';

@Component({
  selector: 'app-nocturne',
  standalone: true,
  imports: [CardHotelComponent, FooterComponent, NavBarComponent, MenuComponent, BlockRestoComponent],
  templateUrl: './nocturne.component.html',
  styleUrl: './nocturne.component.scss'
})
export class NocturneComponent {
  listHotels: Hotel[] = [
    {
      id: '1',
      image: '9',
      desc: 'Lynk Privé Bar & Lounge',
      label: 'Bar privé', 
      city: 'Bonapriso'
    },
    {
      id: '2',
      image: '6',
      desc: "L'Epicurien",
      label: 'Cave a vin',
      city: 'Bonapriso'
    },
    {
      id: '',
      image: '1',
      desc: 'Japoma Rooftop',
      label: 'Terasse',
      city: 'Bonapriso'
    }
  ];

  newHotels: Hotel[] = [
    {
      id: '4',
      image: '9',
      desc: 'BOJ Douala',
      label: 'Cabaret',
      city: 'Bonanjo'
      
    },
    {
      id: '5',
      image: '8',
      desc: 'Switch night-club',
      label: 'Night-club',
      city: 'Bonanjo'
    },
    {
      id: '6',
      image: '5',
      desc: 'La Bodega',
      label: 'Night-club',
      city: 'Bonamoussadi'
    },
  ];
}
