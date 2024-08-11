import { AfterViewInit, Component, OnInit } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger)

@Component({
  selector: 'app-left-fade-cards',
  standalone: true,
  imports: [],
  templateUrl: './left-fade-cards.component.html',
  styleUrl: './left-fade-cards.component.scss'
})
export class LeftFadeCardsComponent implements OnInit, AfterViewInit {
  ngOnInit(): void {}

  ngAfterViewInit() {
    this.initAnimations();
  }

  initAnimations(): void {
    const cards = gsap.utils.toArray('.card');
    cards.forEach((card: any, index) => {
      ScrollTrigger.create({
        trigger: card,
        start: "top top",
        onEnter: () => this.fadeAway(card),
        onLeaveBack: () => this.fadeIn(card),
        pin: true,
        pinSpacing: false,
        scrub: 1,
        end: "+=100"
      });
    });
  }

  fadeAway(element: HTMLElement) {
    gsap.to(element, {
      x: -200, // Move to the left
      opacity: 0, // Fade out
      duration: 0.5, // Duration of the animation (faster)
      onComplete: ():any => element.style.display = 'none' // Hide the element after animation
    });
  }

  fadeIn(element: HTMLElement) {
    element.style.display = 'block'; // Show the element before animation
    gsap.to(element, {
      x: 0, // Move back to original position
      opacity: 1, // Fade in
      duration: 0.5, // Duration of the animation (faster)
      ease: "power1.out"
    });
  }
}
