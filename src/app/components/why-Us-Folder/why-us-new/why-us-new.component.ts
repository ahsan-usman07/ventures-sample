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
    this.animateWhyUsCards();
  }

  animateWhyUsCards() {
    let horizontalSection:any = document.querySelector('.why-us-horizontal');
    gsap.to('.why-us-horizontal', {
      x: () => horizontalSection.scrollWidth * -1,
      xPercent: 100,
      scrollTrigger: {
        trigger: '.why-us-horizontal',
        start: 'center center',
        end: '+=2000px',
        pin: '#why-us-horizontal-scroll',
        scrub: true,
        invalidateOnRefresh: true
      }
    });

  }
}
