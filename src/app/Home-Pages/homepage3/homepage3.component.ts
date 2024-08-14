import { Component, HostListener, OnInit } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { TextAnimationComponent } from '../../components/text-animation/text-animation.component';
import { TeamComponent } from '../../components/team/team.component';
import { HorizontalScrollCardsComponent } from '../../components/why-Us-Folder/horizontal-scroll-cards/horizontal-scroll-cards.component';
import { CommonModule } from '@angular/common';
import { TeamHorizontalComponent } from '../../components/team-horizontal/team-horizontal.component';
import { LateralSectionComponent } from '../../lateral-section/lateral-section.component';
import { WhyUsNewComponent } from '../../components/why-Us-Folder/why-us-new/why-us-new.component';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-homepage3',
  standalone: true,
  imports: [TextAnimationComponent, TeamComponent, HorizontalScrollCardsComponent, CommonModule, TeamHorizontalComponent, LateralSectionComponent, WhyUsNewComponent],
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
      x: 50, // Reduced distance for slower effect
      scrollTrigger: {
        trigger: triggerElement,
        start: "top center",
        end: "bottom top",
        scrub: 2 // Higher scrub value for a slower effect
      }
    });
  
    gsap.to("#second-head", {
      x: -50, // Reduced distance for slower effect
      scrollTrigger: {
        trigger: triggerElement,
        start: "top center",
        end: "bottom top",
        scrub: 2 // Higher scrub value for a slower effect
      }
    });
  }
  
}
