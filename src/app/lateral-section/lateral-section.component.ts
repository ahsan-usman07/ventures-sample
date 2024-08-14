import { AfterViewInit, Component } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-lateral-section',
  standalone: true,
  imports: [],
  templateUrl: './lateral-section.component.html',
  styleUrl: './lateral-section.component.scss'
})
export class LateralSectionComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    this.animateLateralSection();
    this.rotateTheCircle();
  }

  animateLateralSection() {
    const circles: NodeListOf<HTMLElement> = document.querySelectorAll('.inner-circle');
    const rightElements: NodeListOf<HTMLElement> = document.querySelectorAll('.right-content .right-element');
    
    // Calculate the total scrollable area based on the number of elements
    const totalCircles = circles.length;
    const endValue = `+=${100 * (totalCircles - 1)}%`; // Adjust the end value based on the number of circles
  
    // Create the timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.value-container',
        start: 'top top',
        end: endValue, // End when the last element finishes its animation
        pin: true,
        scrub: true,
      }
    });
    
    // Iterate through circles and apply animations
    circles.forEach((circle, i) => {
      tl.to(circle, { 
          scale: 1.2, 
          duration: 0.6, 
          ease: 'power2.out' // Smooth easing
        }, '<')
        .to(circle, { 
          scale: 1, 
          duration: 0.6, 
          ease: 'power2.inOut' // Smooth easing for zoom out
        }, '+=0.8')
        .to(rightElements, { 
          yPercent: -(100 * (i + 1)), 
          duration: 1, 
          ease: 'power2.inOut' // Smooth easing for right elements
        }, '<');
    });
  }
  
  rotateTheCircle() {
    const duration = 30; // duration of one full rotation in seconds
  
    // Main circle rotation
    gsap.to('#main-circle', {
      duration: duration,
      rotate: 360,
      ease: 'linear',
      repeat: -1
    });
  
    // Reverse rotation for inner circles to maintain their orientation
    gsap.to(['#top-left', '#top-right', '#bottom-left', '#bottom-right'], {
      duration: duration,
      rotate: -360,
      ease: 'linear',
      repeat: -1
    });
  }
  
  
  // animate() {
  //   const shapes: NodeListOf<SVGElement> = document.querySelectorAll('.left-content svg');
  //   const rightElements: NodeListOf<HTMLElement> = document.querySelectorAll('.right-content .right-element');

  //   // Create the timeline
  //   const tl = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: '.container',
  //       start: 'top top',
  //       end: '+=300%',
  //       pin: true,
  //       scrub: true,
  //       markers: true
  //     }
  //   });

  //   // Iterate through shapes and apply animations
  //   shapes.forEach((shape, i) => {
  //     if (shapes[i + 1]) {
  //       tl.to(shape, { opacity: 0 }, '+=0.5')
  //         .to(shapes[i + 1], { opacity: 1 }, '<')
  //         .to(rightElements, { yPercent: -(100 * (i + 1)), ease: 'none' }, '<');
  //     }
  //   });

  //   // Add an empty timeline to the end for spacing
  //   tl.to({}, {}, '+=0.5');
  // }

}
