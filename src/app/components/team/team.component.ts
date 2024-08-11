import { AfterViewInit, Component, OnInit } from '@angular/core';
import { gsap } from 'gsap'; 
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
@Component({
  selector: 'app-team',
  standalone: true,
  imports: [],
  templateUrl: './team.component.html',
  styleUrl: './team.component.scss'
})
export class TeamComponent implements OnInit, AfterViewInit {
  ngOnInit() {
    // Initial setup if needed
  }

  ngAfterViewInit() {
    this.initScrollTrigger();
  }

  initScrollTrigger() {
    ScrollTrigger.create({
      trigger: '#teamSection',
      start: 'top 80%', // Adjust start point as needed
      onEnter: () => this.triggerAnimation()
    });
  }

  triggerAnimation() {
    // Left boxes animation from lower bottom
    gsap.fromTo('.left-box', {
      x: -100,
      y: 50,
      opacity: 0
    }, {
      x: 0,
      y: 0,
      opacity: 1,
      duration: 1,
      stagger: 0.2,
      delay: 0.5
    });

    // Right boxes animation from lower bottom
    gsap.fromTo('.right-box', {
      x: 100,
      y: 50,
      opacity: 0
    }, {
      x: 0,
      y: 0,
      opacity: 1,
      duration: 1,
      stagger: 0.2,
      delay: 1
    });
  }
}
