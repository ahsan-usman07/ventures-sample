import { Component, OnInit } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { TextAnimationComponent } from '../../components/text-animation/text-animation.component';
import { WhyUsNewComponent } from '../../components/why-Us-Folder/why-us-new/why-us-new.component';
import { ScrollCardsComponent } from '../../components/scroll-cards/scroll-cards.component';
import { MarqueeEffectComponent } from "../../components/Marquee-Effect-Folder/marquee-effect/marquee-effect.component";

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-homepage4',
  standalone: true,
  imports: [TextAnimationComponent, WhyUsNewComponent, ScrollCardsComponent, MarqueeEffectComponent],
  templateUrl: './homepage4.component.html',
  styleUrl: './homepage4.component.scss'
})
export class Homepage4Component implements OnInit{
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
