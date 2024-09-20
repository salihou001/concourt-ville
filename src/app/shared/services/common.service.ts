import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import CustomEase from 'gsap/CustomEase';
import gsap from 'gsap';
const myEase = CustomEase.create("abouEase", "1.000, 0.005, 0.000, 0.995");

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  private router = inject(Router);
  constructor() { }

  goToHotels = async () => { 
    await this.router.navigate(['hotels']) 
    this.closeMenu();
  }

  goToHome = async () => { 
    await this.router.navigate(['']) 
    this.closeMenu();
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
