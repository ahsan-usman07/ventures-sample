import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
@Component({
  selector: 'app-team-horizontal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './team-horizontal.component.html',
  styleUrl: './team-horizontal.component.scss'
})
export class TeamHorizontalComponent implements AfterViewInit {

  ngAfterViewInit() {
    this.cardsAnimate();
  }

  cardsAnimate() {
    let horizontalSection:any = document.querySelector('.horizontal-container');
    gsap.to('.horizontal-container', {
      x: () => horizontalSection.scrollWidth * -1,
      xPercent: 100,
      scrollTrigger: {
        trigger: '.horizontal-container',
        start: 'center center',
        end: '+=2000px',
        pin: '#horizontal-scroll',
        scrub: true,
        invalidateOnRefresh: true
      }
    });

  }
}