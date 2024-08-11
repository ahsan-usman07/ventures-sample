import { AfterViewInit, Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-scroll-cards',
  standalone: true,
  imports: [],
  templateUrl: './scroll-cards.component.html',
  styleUrl: './scroll-cards.component.scss'
})
export class ScrollCardsComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    this.initAnimation();
  }

  initAnimation(): void {
    const spacer = 50;
    let cards = gsap.utils.toArray(".card");

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".cardss",
        pin: true,
        scrub: true,
        start: "top 10%",
        end: "bottom 20%",
        // invalidateOnRefresh: true
      }
    });

    tl.fromTo(
      ".card:not(:first-child)",
      {
        y: (index) => window.innerHeight / 2 + spacer * index,
        stagger: 0.5
      },
      {
        y: (index) => spacer * (index + 1),
        stagger: 0.5
      }
    );
  }
}
