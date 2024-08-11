import { Component, HostListener, OnInit } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { TextAnimationComponent } from '../../components/text-animation/text-animation.component';
import { TeamComponent } from '../../components/team/team.component';
import { HorizontalScrollCardsComponent } from '../../components/why-Us-Folder/horizontal-scroll-cards/horizontal-scroll-cards.component';
import { CommonModule } from '@angular/common';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-homepage3',
  standalone: true,
  imports: [TextAnimationComponent, TeamComponent, HorizontalScrollCardsComponent, CommonModule],
  templateUrl: './homepage3.component.html',
  styleUrl: './homepage3.component.scss'
})
export class Homepage3Component implements OnInit {
  isMobileView: boolean = false;

  constructor() {
    this.checkScreenSize();
  }

  ngOnInit(): void {
    this.setupAnimations();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkScreenSize();
  }

  checkScreenSize() {
    this.isMobileView = window.innerWidth <= 768;
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
}
