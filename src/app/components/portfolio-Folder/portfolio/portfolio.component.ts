import { AfterViewInit, Component, OnInit } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent implements OnInit, AfterViewInit{

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.initScrollAnimation();
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
