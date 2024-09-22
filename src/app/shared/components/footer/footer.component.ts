import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import ScrollTrigger from 'gsap/ScrollTrigger';
import gsap from 'gsap';
import CustomEase from 'gsap/CustomEase';
const myEase = CustomEase.create("abouEase", "1.000, 0.005, 0.000, 0.995");
// Créez un MediaMatcher pour gérer différents breakpoints
const mm = gsap.matchMedia();

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

    this.initAnimation();
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

  initAnimation() {

    // Ajoutez des conditions selon les tailles d'écrans
    mm.add("(max-width: 768px)", () => {
      // Animation pour les écrans de moins de 768px
      
    });

    mm.add("(min-width: 769px)", () => {
      // Animation pour les écrans plus grands
      const TL = gsap.timeline({});
      TL
        .to(".footer-lines", {
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
    });
  }

}


