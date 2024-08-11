import { AfterViewInit, Component, OnInit } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-text-animation',
  standalone: true,
  imports: [],
  templateUrl: './text-animation.component.html',
  styleUrl: './text-animation.component.scss'
})
export class TextAnimationComponent implements OnInit, AfterViewInit {
  constructor() { }
  ngAfterViewInit(): void {
       this.animateText();
  }

  ngOnInit(): void {

    this.setupAnimations();
  }

  setupAnimations(): void {
    const triggerElement = ".full-container";

    gsap.to("#first-head", {
      x: 100,
      scrollTrigger: {
        trigger: triggerElement,
        start: "top center",
        end: "bottom top",
        scrub: true
      }
    });

    gsap.to("#second-head", {
      x: -100,
      scrollTrigger: {
        trigger: triggerElement,
        start: "top center",
        end: "bottom top",
        scrub: true
      }
    });
  }

  animateText(): void {
    gsap.utils.toArray('.logo-text').forEach((text: any) => {
      gsap.fromTo(text, 
        { 
          x: 0, 
          y: 100, 
          opacity: 0 
        }, 
        { 
          x: 0, 
          y: 0, 
          opacity: 1, 
          duration: 4, 
          ease: "slow", // Smooth easing
          scrollTrigger: {
            trigger: text,
            start: "top 90%",
            end: "top 60%",
            scrub: 1
          }
        }
      );
    });
  }
}
