import { Component } from '@angular/core';
import { FooterComponent } from "../../shared/components/footer/footer.component";
import { CardHotelComponent } from "../../shared/components/card-hotel/card-hotel.component";
import { BlockRestoComponent } from "../../shared/components/block-resto/block-resto.component";
import { NavBarComponent } from "../../shared/components/nav-bar/nav-bar.component";
import { MenuComponent } from "../../shared/components/menu/menu.component";
import { Hotel } from '../../shared/interface/interface';

@Component({
  selector: 'app-divertissements',
  standalone: true,
  imports: [FooterComponent, CardHotelComponent, BlockRestoComponent, NavBarComponent, MenuComponent],
  templateUrl: './divertissements.component.html',
  styleUrl: './divertissements.component.scss'
})
export class DivertissementsComponent {
  listHotels: Hotel[] = [
    {
      id: '1',
      image: 'v1',
      desc: 'Lynk Privé Bar & Lounge',
      label: 'Bar privé', 
      city: 'Bonapriso'
    },
    {
      id: '2',
      image: 'v6',
      desc: "L'Epicurien",
      label: 'Cave a vin',
      city: 'Bonapriso'
    },
    {
      id: '',
      image: 'v7',
      desc: 'Japoma Rooftop',
      label: 'Terasse',
      city: 'Bonapriso'
    }
  ];

  newHotels: Hotel[] = [
    {
      id: '4',
      image: 'v3',
      desc: 'BOJ Douala',
      label: 'Cabaret',
      city: 'Bonanjo'
      
    },
    {
      id: '5',
      image: 'v8',
      desc: 'Switch night-club',
      label: 'Night-club',
      city: 'Bonanjo'
    },
    {
      id: '6',
      image: 'v4',
      desc: 'La Bodega',
      label: 'Night-club',
      city: 'Bonamoussadi'
    },
  ];
}
