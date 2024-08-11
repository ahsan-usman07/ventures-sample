import { Component, HostListener } from '@angular/core';
import { gsap } from 'gsap';
import { BusinessSectioComponent } from '../business-sectio/business-sectio.component';
import { TeamComponent } from '../team/team.component';
import { WheelComponent } from '../wheel/wheel.component';
import { TeamHorizontalScrollComponent } from '../team-horizontal-scroll/team-horizontal-scroll.component';
import { ValuePropsComponent } from '../value-props/value-props.component';
import { TextAnimationComponent } from '../text-animation/text-animation.component';
import { LeftFadeCardsComponent } from '../left-fade-cards/left-fade-cards.component';
import { ScrollCardsComponent } from '../scroll-cards/scroll-cards.component';
import { HorizontalScrollCardsComponent } from '../why-Us-Folder/horizontal-scroll-cards/horizontal-scroll-cards.component';
import { MarqueeEffectComponent } from '../Marquee-Effect-Folder/marquee-effect/marquee-effect.component';
import { NewMarqueeEffectComponent } from '../Marquee-Effect-Folder/new-marquee-effect/new-marquee-effect.component';
import { LeftCardComponent } from '../Left-Fade-Folder/left-card/left-card.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [BusinessSectioComponent, TeamComponent, WheelComponent, TeamHorizontalScrollComponent, ValuePropsComponent,TextAnimationComponent, LeftFadeCardsComponent, ScrollCardsComponent, HorizontalScrollCardsComponent, MarqueeEffectComponent, NewMarqueeEffectComponent, LeftCardComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {


  constructor() {

  }
  ngOnInit(): void {
    gsap.set("#content", { y: 0 });
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: any): void {
    const scrollY = window.scrollY;
    const content = document.getElementById('content');

    const header = document.getElementById('header');
    const subheader = document.getElementById('subheader');
    if (scrollY > 100) {
      gsap.to(header, { opacity: 0, ease: "power2.out" });
      gsap.to(subheader, { opacity: 0, ease: "power2.out" });
    } else {
      gsap.to(header, { opacity: 1, ease: "power2.out" });
      gsap.to(subheader, { opacity: 1, ease: "power2.out" });
    }
    
  }
}
