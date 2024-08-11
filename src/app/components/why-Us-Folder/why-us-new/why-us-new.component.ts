import { AfterViewInit, Component } from '@angular/core';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);


@Component({
  selector: 'app-why-us-new',
  standalone: true,
  imports: [],
  templateUrl: './why-us-new.component.html',
  styleUrl: './why-us-new.component.scss',
})
export class WhyUsNewComponent implements AfterViewInit {

  ngAfterViewInit() {
    this.animateCards();
  }

  animateCards() {
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
