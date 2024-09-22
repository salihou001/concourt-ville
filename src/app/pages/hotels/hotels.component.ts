import { CardHotelComponent } from "../../shared/components/card-hotel/card-hotel.component";
import { NavBarComponent } from "../../shared/components/nav-bar/nav-bar.component";
import { FooterComponent } from "../../shared/components/footer/footer.component";
import { MenuComponent } from "../../shared/components/menu/menu.component";
import { Hotel } from '../../shared/interface/interface';
import { Component, OnInit } from '@angular/core';
import ScrollTrigger from 'gsap/ScrollTrigger';
import gsap from 'gsap';

gsap.registerPlugin(ScrollTrigger);

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
    this.initAnimation();
  }

  initAnimation() {

    // Ajoutez des conditions selon les tailles d'écrans
    // mm.add("(max-width: 768px)", () => {
      // Animation pour les écrans de moins de 768px
      // gsap.to(".line-left", {
      //   scrollTrigger: {
      //     trigger: '.line-left',
      //     scrub: 1,
      //     start: 'top 60%',
      //     end: 'bottom center',
      //   },
      //   left: '-420px',
      //   duration: 1,
      //   delay: 1.5,
      //   ease: 'sine.out'
      // });
  
      // gsap.to(".line-right", {
      //   scrollTrigger: {
      //     trigger: '.line-right',
      //     scrub: 1,
      //     start: 'top 60%',
      //     end: 'center center',
      //   },
      //   right: '-160px',
      //   duration: 1,
      //   delay: 1.5,
      //   ease: 'sine.out'
      // });
    // });

    // mm.add("(min-width: 769px)", () => {
      // Animation pour les écrans plus grands
      const TL = gsap.timeline({});
      TL 
      .to(".line-right", {
        scrollTrigger: {
          trigger: '.line-right',
          scrub: 1,
          start: 'top 60%',
          end: 'center center',
        },
        right: '-160px',
        duration: 1,
        ease: 'sine.out'
      })
      .to(".line-left", {
          scrollTrigger: {
            trigger: '.line-left',
            scrub: 1,
            start: 'top 60%',
            end: 'bottom center',
          },
          left: '-420px',
          duration: 1,
          delay: 1.5,
          ease: 'sine.out'
        })
  }
}
