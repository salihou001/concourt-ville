import { BlockCardComponent } from "../../shared/components/block-card/block-card.component";
import { CardHotelComponent } from "../../shared/components/card-hotel/card-hotel.component";
import { NavBarComponent } from "../../shared/components/nav-bar/nav-bar.component";
import { FooterComponent } from "../../shared/components/footer/footer.component";
import { MenuComponent } from "../../shared/components/menu/menu.component";
import { Block, Hotel } from '../../shared/interface/interface';
import { Component, inject, signal } from '@angular/core';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import CustomEase from 'gsap/CustomEase';
import { CommonService } from "../../shared/services/common.service";
const myEase = CustomEase.create("abouEase", "1.000, 0.005, 0.000, 0.995");
gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FooterComponent, CardHotelComponent, BlockCardComponent, NavBarComponent, MenuComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent  {

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
  slide = signal(1);
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
  commonSrv = inject(CommonService);
  ngAfterViewInit(): void { this.commonSrv.initHomeAnimtation(); }

  prevuis() {
    if (this.slide() === 2) {
      const TL = gsap.timeline();
      TL
        .to(".row", {
          xPercent: 0,
          duration: 1.5,
          ease: myEase
        })
        .to(".vertical-row", {
          yPercent: 0,
          duration: 1.5,
          ease: myEase
        }, "<")
        .to("#deido_city", {
          fill: "#1B1B1B",
          duration: .3,
          ease: myEase
        }, "<")
        .to("#Deido", {
          fill: "#FFFFFF",
          duration: .1,
          ease: myEase
        }, "<.1")
        .to("#akwa_city", {
          fill: "#FFF455",
          duration: 1.5,
          ease: myEase
        }, "<")
        .to("#Akwa", {
          fill: "#06AAFF",
          duration: .1,
          ease: myEase
        }, "<")
      this.slide.set(1);
    } else {
      if (this.slide() === 3) {
        const TL = gsap.timeline();
        TL
          .to(".row", {
            xPercent: -100,
            duration: 1.5,
            ease: myEase
          })
          .to(".vertical-row", {
            yPercent: -100,
            duration: 1.5,
            ease: myEase
          }, "<")
          .to("#Vector_1", {
            fill: "#1B1B1B",
            duration: .3,
            ease: myEase
          }, "<")
          .to("#bependa", {
            fill: "#FFFFFF",
            duration: .1,
            ease: myEase
          }, "<")
          .to("#deido_city", {
            fill: "#FFF455",
            duration: 1.5,
            ease: myEase
          }, "<")
          .to("#Deido", {
            fill: "#06AAFF",
            duration: .1,
            ease: myEase
          }, "<")
        this.slide.set(2);
      } else {
        if (this.slide() === 4) {
          const TL = gsap.timeline();
          TL
            .to(".row", {
              xPercent: -200,
              duration: 1.5,
              ease: myEase
            })
            .to(".vertical-row", {
              yPercent: -180,
              duration: 1.5,
              ease: myEase
            }, "<")
            .to("#new_bell_1", {
              fill: "#1B1B1B",
              duration: .3,
              ease: myEase
            }, "<")
            .to("#new_bell", {
              fill: "#FFFFFF",
              duration: .1,
              ease: myEase
            }, "<")
            .to("#Vector_1", {
              fill: "#FFF455",
              duration: 1.5,
              ease: myEase
            }, "<")
            .to("#bependa", {
              fill: "#06AAFF",
              duration: .1,
              ease: myEase
            }, "<")
          this.slide.set(3);
        } else {
          if (this.slide() === 5) {
            const TL = gsap.timeline();
            TL
              .to(".row", {
                xPercent: -300,
                duration: 1.5,
                ease: myEase
              })
              .to(".vertical-row", {
                yPercent: -260,
                duration: 1.5,
                ease: myEase
              }, "<")
              .to("#Bonandjo_1", {
                fill: "#1B1B1B",
                duration: .3,
                ease: myEase
              }, "<")
              .to("#Bonandjo", {
                fill: "#FFFFFF",
                duration: .1,
                ease: myEase
              }, "<")
              .to("#new_bell_1", {
                fill: "#FFF455",
                duration: 1.5,
                ease: myEase
              }, "<")
              .to("#new_bell", {
                fill: "#06AAFF",
                duration: .1,
                ease: myEase
              }, "<")
            this.slide.set(4);
          } else {
            if (this.slide() === 6) {
              const TL = gsap.timeline();
              TL
                .to(".row", {
                  xPercent: -400,
                  duration: 1.5,
                  ease: myEase
                })
                .to(".vertical-row", {
                  yPercent: -325,
                  duration: 1.5,
                  ease: myEase
                }, "<")
                .to("#bonaberi_1", {
                  fill: "#1B1B1B",
                  duration: .3,
                  ease: myEase
                }, "<")
                .to("#bonaberi", {
                  fill: "#FFFFFF",
                  duration: .1,
                  ease: myEase
                }, "<")
                .to("#Bonandjo_1", {
                  fill: "#FFF455",
                  duration: 1.5,
                  ease: myEase
                }, "<")
                .to("#Bonandjo", {
                  fill: "#06AAFF",
                  duration: .1,
                  ease: myEase
                }, "<")
              this.slide.set(5);
            }
          }
        }
      }
    }
  }
  next() {
    if (this.slide() === 1) {
      const TL = gsap.timeline();
      TL
        .to(".row", {
          xPercent: -100,
          duration: 1.5,
          ease: myEase
        })
        .to(".vertical-row", {
          yPercent: -100,
          duration: 1.5,
          ease: myEase
        }, "<")
        .to("#akwa_city", {
          fill: "#1B1B1B",
          duration: .3,
          ease: myEase
        }, "<")
        .to("#Akwa", {
          fill: "#FFFFFF",
          duration: .1,
          ease: myEase
        }, "<")
        .to("#deido_city", {
          fill: "#FFF455",
          duration: 1.5,
          ease: myEase
        }, "<")
        .to("#Deido", {
          fill: "#06AAFF",
          duration: .1,
          ease: myEase
        }, "<")
      this.slide.set(2);
    } else {
      if (this.slide() === 2) {
        const TL = gsap.timeline();
        TL
          .to(".row", {
            xPercent: -200,
            duration: 1.5,
            ease: myEase
          })
          .to(".vertical-row", {
            yPercent: -180,
            duration: 1.5,
            ease: myEase
          }, "<")
          .to("#deido_city", {
            fill: "#1B1B1B",
            duration: .3,
            ease: myEase
          }, "<")
          .to("#Deido", {
            fill: "#FFFFFF",
            duration: .1,
            ease: myEase
          }, "<")
          .to("#Vector_1", {
            fill: "#FFF455",
            duration: 1.5,
            ease: myEase
          }, "<")
          .to("#bependa", {
            fill: "#06AAFF",
            duration: .1,
            ease: myEase
          }, "<")
        this.slide.set(3);
      } else {
        if (this.slide() === 3) {
          const TL = gsap.timeline();
          TL
            .to(".row", {
              xPercent: -300,
              duration: 1.5,
              ease: myEase
            })
            .to(".vertical-row", {
              yPercent: -260,
              duration: 1.5,
              ease: myEase
            }, "<")
            .to("#Vector_1", {
              fill: "#1B1B1B",
              duration: .3,
              ease: myEase
            }, "<")
            .to("#bependa", {
              fill: "#FFFFFF",
              duration: .1,
              ease: myEase
            }, "<")
            .to("#new_bell_1", {
              fill: "#FFF455",
              duration: 1.5,
              ease: myEase
            }, "<")
            .to("#new_bell", {
              fill: "#06AAFF",
              duration: .1,
              ease: myEase
            }, "<")
          this.slide.set(4);
        } else {
          if (this.slide() === 4) {
            const TL = gsap.timeline();
            TL
              .to(".row", {
                xPercent: -400,
                duration: 1.5,
                ease: myEase
              })
              .to(".vertical-row", {
                yPercent: -330,
                duration: 1.5,
                ease: myEase
              }, "<")
              .to("#new_bell_1", {
                fill: "#1B1B1B",
                duration: .3,
                ease: myEase
              }, "<")
              .to("#new_bell", {
                fill: "#FFFFFF",
                duration: .1,
                ease: myEase
              }, "<")
              .to("#Bonandjo_1", {
                fill: "#FFF455",
                duration: 1.5,
                ease: myEase
              }, "<")
              .to("#Bonandjo", {
                fill: "#06AAFF",
                duration: .1,
                ease: myEase
              }, "<")
            this.slide.set(5);
          } else {
            if (this.slide() === 5) {
              const TL = gsap.timeline();
              TL
                .to(".row", {
                  xPercent: -500,
                  duration: 1.5,
                  ease: myEase
                })
                .to(".vertical-row", {
                  yPercent: -400,
                  duration: 1.5,
                  ease: myEase
                }, "<")
                .to("#Bonandjo_1", {
                  fill: "#1B1B1B",
                  duration: .3,
                  ease: myEase
                }, "<")
                .to("#Bonandjo", {
                  fill: "#FFFFFF",
                  duration: .1,
                  ease: myEase
                }, "<")
                .to("#bonaberi_1", {
                  fill: "#FFF455",
                  duration: 1.5,
                  ease: myEase
                }, "<")
                .to("#bonaberi", {
                  fill: "#06AAFF",
                  duration: .1,
                  ease: myEase
                }, "<")
              this.slide.set(6);
            }
          }
        }
      }
    }
  }
}
