import { ChangeDetectionStrategy, Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Lenis from '@studio-freight/lenis';
import gsap from 'gsap';
import CustomEase from 'gsap/CustomEase';
import { BlockCardComponent } from "./shared/components/block-card/block-card.component";
import { Block, Hotel } from './shared/interface/interface';
import { CardHotelComponent } from "./shared/components/card-hotel/card-hotel.component";

const myEase = CustomEase.create("abouEase", "1.000, 0.005, 0.000, 0.995");


// gsap.registerPlugin(ScrollTrigger);


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BlockCardComponent, CardHotelComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {

  home = ['W', 'e', 'l', 'c', 'o', 'm', 'e'];
  hotel = ['H', 'o', 't', 'e', 'l'];
  welcome = ['W', 'e', 'l', 'c', 'o', 'm', 'e'];
  douala = ['D', 'o', 'u', 'a', 'l', 'a'];
  the = ['t', 'h', 'e'];
  beating = ['b', 'e', 'a', 't', 'i', 'n', 'g'];
  heart = ['c', 'i', 't', 'y'];
  of = ['o', 'f'];
  cameroon = ['C', 'a', 'm', 'e', 'r', 'o', 'o', 'n'];
  discover = ['D', 'i', 's', 'c', 'o', 'v', 'e', 'r'];
  our = ['o', 'u', 'r'];
  cultural = ['c', 'u', 'l', 't', 'u', 'r', 'a', 'l'];
  and = ['a', 'n', 'd'];
  natural = ['n', 'a', 't', 'u', 'r', 'a', 'l'];
  riches = ['r', 'i', 'c', 'h', 'e', 's'];

  listBlock: Block[] = [
    {
      id: '1',
      image: 'Rectangle 3', 
      f_text: 'ANCIENNE MAISON DES CÉLIBATAIRES DE LA WOERMANN LINIE', 
      l_text: "L'histoire de la maison des célibataires est intrinsèquement liée à celle d'Adolph Woermann, cet homme d'affaires qui convint Otto von Bismarck d'établir un protectorat au Kamerun."
    },
    {
      id: '2',
      image: 'Rectangle 15', 
      f_text: 'ANCIENNE MAISON DES CÉLIBATAIRES DE LA WOERMANN LINIE', 
      l_text: "L'histoire de la maison des célibataires est intrinsèquement liée à celle d'Adolph Woermann, cet homme d'affaires qui convint Otto von Bismarck d'établir un protectorat au Kamerun."
    },
    {
      id: '3',
      image: 'Rectangle 21', 
      f_text: 'ANCIENNE MAISON DES CÉLIBATAIRES DE LA WOERMANN LINIE', 
      l_text: "L'histoire de la maison des célibataires est intrinsèquement liée à celle d'Adolph Woermann, cet homme d'affaires qui convint Otto von Bismarck d'établir un protectorat au Kamerun."
    },
    {
      id: '4',
      image: 'Rectangle 17', 
      f_text: 'ANCIENNE MAISON DES CÉLIBATAIRES DE LA WOERMANN LINIE', 
      l_text: "L'histoire de la maison des célibataires est intrinsèquement liée à celle d'Adolph Woermann, cet homme d'affaires qui convint Otto von Bismarck d'établir un protectorat au Kamerun."
    },
  ]
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
  ]

  ngOnInit(): void { }
  ngAfterViewInit(): void {
    const lenis = new Lenis();
    lenis.on('scroll', (e: any) => {
    })
    lenis.on('scroll', ScrollTrigger.update)
    gsap.ticker.add((time) => {
      lenis.raf(time * 500)
    })
    gsap.ticker.lagSmoothing(0);

    const TL = gsap.timeline({});
    TL
      .fromTo('.chart', {
        y: '45px',
        opacity: 0,
        // scaleX: -3.5
      }, {
        y: '*',
        stagger: {
          amount: 1
        },
        // scaleX: 1,
        opacity: 1,
        duration: 3,
        delay: 2,
        ease: 'elastic'
      })
      .fromTo('.arret-1', {
        opacity: 0,
      }, {
        duration: 1,
        delay: 1,
        opacity: 1,
        ease: myEase
      }, "<")
      .fromTo('.line-one', {
        clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)',
      }, {
        duration: 5,
        clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
        ease: myEase
      }, "<")
      .fromTo('.arret-2', {
        opacity: 0,
      }, {
        duration: 1,
        opacity: 1,
        ease: myEase
      }, "<2")
      .fromTo('.arret-3', {
        opacity: 0,
      }, {
        duration: 1,
        opacity: 1,
        ease: myEase
      }, "<1.6")
      .fromTo('.line-tree', {
        scaleX: 0,
        transformOrigin: 'right right',
      }, {
        duration: 3,
        delay: 1,
        scale: 1,
        ease: myEase
      }, "<-2.5")
      .fromTo('.line-two', {
        clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)',
      }, {
        duration: 1,
        clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
        ease: 'sine.out'
      }, "<1.5")
      .fromTo('.second', {
        width: 0
      }, {
        duration: 2,
        delay: 1,
        width: 'auto',
        ease: myEase
      }, "<")
      .fromTo('.start', {
        scale: -1.5,
      }, {
        scale: 1,
        duration: 1,
        delay: 1,
        ease: 'elastic'
      }, "<")
      .fromTo('.photograph', {
        clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)',
      }, {
        duration: 1.5,
        stagger: {
          amount: .5
        },
        clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
        delay: 1,
        ease: myEase
      }, "<-1")
      .fromTo('.rotate', {
        rotate: 0,
        y: -24,
        opacity: 0
      }, {
        rotate: 360,
        y: '*',
        opacity: 1,
        duration: 2,
        ease: myEase
      }, "<")
      .fromTo('.start, .rotate', {
        rotate: 0,
      }, {
        rotate: 360,
        duration: 2,
        yoyo: true,
        repeat: -1,
        delay: 2,
        ease: myEase
      }, "<")
      .fromTo('.arrow-b', {
        opacity: 0,
      }, {
        opacity: 1,
        duration: 1,
        ease: myEase
      }, "<-1")
  }

  moveCursor(e: any) {
    gsap.to(".cursor-contain", {
      x: e.clientX - 10 + 'px',
      y: e.clientY - 640 + 'px',
      delay: .1,
    })
  }

  openMenu() {
      const TL = gsap.timeline();
      TL
        .fromTo(".menu-container", {
          right: '-105%'
        }, {
          right: 0,
          duration: 1,
          ease: myEase
        })
  }

  fromUp(row:string) {
    const TL = gsap.timeline();
    TL
    .fromTo(`.menu-${row} .chart`, {
      y: '-55px',
    }, {
      y: '*',
      stagger: {
        amount: .2
      },
      ease: 'sine.out'
    })
  }

  closeMenu() {
    const TL = gsap.timeline();
    TL
      .fromTo(".menu-container", {
        right: 0
      }, {
        right: '-105%',
        duration: 1,
        ease: myEase
      })
  }
  
}

// ScrollTrigger.create({
//   trigger: ".box-container",
//   start: "top top",
//   endTrigger: "#otherID",
//   end: "bottom 50%+=100px",
//   onToggle: (self) => console.log("toggled, isActive:", self.isActive),
//   onUpdate: (self) => {
//     console.log(
//       "progress:",
//       self.progress.toFixed(3),
//       "direction:",
//       self.direction,
//       "velocity",
//       self.getVelocity()
//     );
//     if (self.direction > 0) {
//       const TL = gsap.timeline();
//       TL
//         .to('.box-container', {
//           width: '70%',
//           height: '5%',
//           top: '20px',
//           ease: myEase
//         })
//         .to('.header_img', {
//           borderRadius: '50px',
//           ease: myEase
//         },"<")
//         .to('.text-about,.text-portfolio', {
//           opacity: 0,
//           y: '*',
//           ease: myEase
//         }, "<")
//         .to('.header', {
//           padding: '0 1%',
//           top:'10',
//           left: '0%',
//           x: -'50%',
//           y: -'50%',
//           marginTop: 0,
//         }, "<")
//     } else {
//       const TL = gsap.timeline();
//       TL
//         .to('.box-container', {
//           width: '100%',
//           top: 0,
//           height: '100%',
//           ease: myEase
//         })
//         .to('.header_img', {
//           borderRadius: '0px',
//           ease: myEase
//         },"<")
//         .to('.circle', {
//           y: '-100px',
//           opacity: 1,
//           ease: myEase
//         }, "<")
//         .to('.noice', {
//           y: '*',
//           opacity: 1,
//           ease: myEase
//         }, "<")
//         .to('.header', {
//           padding: '0 5%'
//         }, "<")
//     }
//   },
// })
// }