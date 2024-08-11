import { AfterViewInit, Component } from '@angular/core';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-horizontal-scroll-cards',
  standalone: true,
  imports: [],
  templateUrl: './horizontal-scroll-cards.component.html',
  styleUrl: './horizontal-scroll-cards.component.scss',
})
export class HorizontalScrollCardsComponent implements AfterViewInit {

  ngAfterViewInit() {
    this.cardsAnimate();
  }

  cardsAnimate() {
    let horizontalSection:any = document.querySelector('.horizontal');
    gsap.to('.horizontal', {
      x: () => horizontalSection.scrollWidth * -1,
      xPercent: 100,
      scrollTrigger: {
        trigger: '.horizontal',
        start: 'center center',
        end: '+=2000px',
        pin: '#horizontal-scoll',
        scrub: true,
        invalidateOnRefresh: true
      }
    });

  }

}
