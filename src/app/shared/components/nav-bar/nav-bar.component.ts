import { CommonService } from '../../services/common.service';
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {

  private commonSrv = inject(CommonService);
  private router = inject(Router);

  openMenu = async () => await this.commonSrv.openMenu();
  goToHotels = async () => await this.router.navigate(['hotels']);
  goToRestaurant = async () => await this.router.navigate(['restaurants']);
  goToNocturne = async () => await this.router.navigate(['nocturnes']);

}
