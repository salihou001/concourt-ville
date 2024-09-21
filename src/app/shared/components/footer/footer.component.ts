import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import gsap from 'gsap';

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
  }

  goUp() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Scroll en douceur
    });
  }
  
  navigate(url: string) { 
    this.router.navigate([ `${url}`]);
    this.goUp();
  }
} 


