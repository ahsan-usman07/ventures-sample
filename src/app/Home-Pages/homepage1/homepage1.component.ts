import { Component, OnInit } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { LeftCardComponent } from '../../components/Left-Fade-Folder/left-card/left-card.component';
import { TextAnimationComponent } from '../../components/text-animation/text-animation.component';
import { TeamComponent } from '../../components/team/team.component';
import { WhyUsNewComponent } from '../../components/why-Us-Folder/why-us-new/why-us-new.component';

gsap.registerPlugin(ScrollTrigger);


@Component({
  selector: 'app-homepage1',
  standalone: true,
  imports: [LeftCardComponent, TextAnimationComponent, TeamComponent, WhyUsNewComponent],
  templateUrl: './homepage1.component.html',
  styleUrl: './homepage1.component.scss'
})
export class Homepage1Component implements OnInit {
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
}
