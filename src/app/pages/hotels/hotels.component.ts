import { CardHotelComponent } from "../../shared/components/card-hotel/card-hotel.component";
import { NavBarComponent } from "../../shared/components/nav-bar/nav-bar.component";
import { FooterComponent } from "../../shared/components/footer/footer.component";
import { MenuComponent } from "../../shared/components/menu/menu.component";
import { Hotel } from '../../shared/interface/interface';
import { Component, OnInit } from '@angular/core';
import gsap from 'gsap';

@Component({
  selector: 'app-hotels',
  standalone: true,
  imports: [MenuComponent, NavBarComponent, FooterComponent, CardHotelComponent],
  templateUrl: './hotels.component.html',
  styleUrl: './hotels.component.scss'
})
export class HotelsComponent implements OnInit {
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

  ngOnInit(): void {
    gsap.to(".cercle", {
      rotate: -360,
      duration: 2,
      ease: 'sine.inOut',
      repeat: -1
    })
  }
}
