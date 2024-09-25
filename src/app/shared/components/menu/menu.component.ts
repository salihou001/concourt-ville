import { CommonService } from '../../services/common.service';
import { Component, inject } from '@angular/core';
import gsap from 'gsap';


@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {

  home = ['H', 'o', 'm', 'e'];
  hotels = ['H', 'o', 't', 'e', 'l', 's'];
  nocturne = ['N', 'o', 'c', 't', 'u','r', 'n', 'e'];
  restaurants = ['R', 'e', 's', 't', 'a', 'u', 'r', 'a', 'n', 't', 's'];
  divertissements = ['D', 'i', 'v', 'e', 'r', 't', 'i', 's', 's', 'e', 'm', 'e', 'n', 't'];

  private commonSrv = inject(CommonService);

  closeMenu = async () => await this.commonSrv.closeMenu();
  goToHome = async () => await this.commonSrv.goToHome();
  goToHotels = async () => await this.commonSrv.goToHotels();
  goToNocture = async () => await this.commonSrv.goToNocture();
  goToRestaurants = async () => await this.commonSrv.goToRestaurants();
  goToDivert = async () => await this.commonSrv.goToDivert();

  fromUp(row: string) {
    console.log(row);
    const TL = gsap.timeline();
    TL
      .fromTo(`.menu-${row} .chart`, {
        y: '-55px',
      }, {
        y: '*',
        stagger: {
          amount: .3
        },
        ease: 'sine.out'
      })
  }

}
