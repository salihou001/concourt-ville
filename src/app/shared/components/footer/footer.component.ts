import { Component, OnInit, inject } from '@angular/core';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { Router } from '@angular/router';
import gsap from 'gsap';
gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent implements OnInit {

  private router = inject(Router);
  ngOnInit() {
    gsap.fromTo(".arrow-up", {
      y: '20px'
    }, {
      y: '*',
      duration: 1,
      repeat: -1
    });
    gsap.to(".footer-lines", {
      scrollTrigger: {
        trigger: '.footer-lines',
        scrub: 1,
        start: 'top 70%',
        end: 'bottom bottom',
      },
      top: '-50px',
      duration: 2,
      ease: 'sine.out'
    })
  }

  goUp() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Scroll en douceur
    });
  }

  navigate(url: string) {
    this.router.navigate([`${url}`]);
    this.goUp();
  }

}


