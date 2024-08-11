import { AfterViewInit, Component } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
@Component({
  selector: 'app-team-horizontal',
  standalone: true,
  imports: [],
  templateUrl: './team-horizontal.component.html',
  styleUrl: './team-horizontal.component.scss'
})
export class TeamHorizontalComponent implements AfterViewInit {
  ngAfterViewInit() {
    this.initScrollTrigger();
  }


  initScrollTrigger() {
    ScrollTrigger.create({
      trigger: '#teamSection',
      start: 'top 80%', // Adjust start point as needed
      onEnter: () => this.triggerAnimation(),
      horizontal: true, // Enable horizontal scrolling
      scroller: '.container', // Use the container as the scroller
    });
  }

  triggerAnimation() {
    // Left boxes animation from lower bottom
    gsap.fromTo('.box', {
      y: 50,
      opacity: 0
    }, {
      y: 0,
      opacity: 1,
      duration: 1,
      stagger: 0.2,
      delay: 0.5
    });



  }
}