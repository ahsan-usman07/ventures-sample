import { AfterViewInit, Component, OnInit } from '@angular/core';
import { gsap } from 'gsap';
import Draggable from 'gsap/Draggable';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-business-sectio',
  standalone: true,
  imports: [],
  templateUrl: './business-sectio.component.html',
  styleUrl: './business-sectio.component.scss'
})
export class BusinessSectioComponent implements OnInit, AfterViewInit {
  
  constructor() { }
  ngAfterViewInit(): void {
  
  }

  ngOnInit(): void {
    this.initSlider();
    this.animateSlides();
  }

  animateSlides() {
    gsap.from(".slide", {
      duration: 1,
      x: 200,  // Start from the right
      opacity: 0,
      stagger: 0.3,
      ease: "power2.out",
      scrollTrigger: {
        trigger: "#business-section",
        start: "top center", // Animation starts when the top of the section hits the center of the viewport
        toggleActions: "play none none none" // Play animation on enter
      }
    });
  }

  initSlider(): void {
    gsap.registerPlugin(Draggable);

    const slider = document.getElementById('slider') as HTMLElement;

    Draggable.create(slider, {
      type: 'x',
      bounds: { minX: -slider.scrollWidth + slider.clientWidth, maxX: 0 },
      edgeResistance: 0.65,
      throwProps: true
    });
  }

  scrollToSection(sectionId:any) {
    const section = document.getElementById(sectionId)!;
    section.scrollIntoView({ behavior: 'smooth' });
}
}
