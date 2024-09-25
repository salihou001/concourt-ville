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

  goToNocture = async () => { 
    await this.router.navigate(['nocturnes']) 
    this.closeMenu();
  }

  goToRestaurants = async () => { 
    await this.router.navigate(['restaurants']) 
    this.closeMenu();
  }

  goToDivert = async () => { 
    await this.router.navigate(['divertissements']) 
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

  initHomeAnimtation() {
    const TL = gsap.timeline({});
    TL
      .fromTo('.hero .chart', {
        y: '25px',
        opacity: 0,
      }, {
        y: '*',
        stagger: {
          amount: 1
        },
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
      .to(".vertical-row div", {
        scrollTrigger: {
          trigger: '.vertical-row div',
          scrub: 1,
          start: 'bottom 40%',
          end: 'bottom bottom',
        },
        stagger: {
          amount: 5
        },
        color: '#000',
        ease: 'sine.out'
      })
  }
}
