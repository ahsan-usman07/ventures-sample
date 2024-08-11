import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, HostListener, OnInit } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent implements OnInit, AfterViewInit{
  isMobile: boolean = false;
  constructor() { }

  ngOnInit(): void {
    this.checkScreenSize();
  }

  ngAfterViewInit(): void {
    this.initScrollAnimation();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkScreenSize();
  }

  checkScreenSize() {
    this.isMobile = window.innerWidth < 768;
  }

  initScrollAnimation(): void {
    const cards = gsap.utils.toArray<HTMLElement>(".cards");
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".card-wrapper",
        pin: ".page-wrapper",
        start: "top top",
        scrub: true,
        end: () => "+=" + cards.length * cards[0].offsetHeight
      }
    });

    tl.add(() => {
      console.log("cards", 1, "in place");
    }, 0.001);

    cards.slice(1).forEach((card, i) => {
      tl.fromTo(card, {
        yPercent: 0
      }, {
        yPercent: -105,
        duration: 0.5
      });
      tl.add(() => {
        console.log("cards", (i + 2), "in place");
      });
    });
  }
}
