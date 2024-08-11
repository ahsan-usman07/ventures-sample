import { AfterViewInit, Component } from '@angular/core';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import gsap from 'gsap';
gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-marquee-effect',
  standalone: true,
  imports: [],
  templateUrl: './marquee-effect.component.html',
  styleUrl: './marquee-effect.component.scss'
})
export class MarqueeEffectComponent implements AfterViewInit {

  ngAfterViewInit() {
    // Marquee effect
    const marquees = document.querySelectorAll('.marquee');

    marquees.forEach((marquee) => {
      const carousel = marquee.querySelectorAll('.marquee-carousel');

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: marquee,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 0.3,
        }
      });

      tl.fromTo(
        carousel[0],
        { x: '-100%' },
        { x: '100%', ease: 'none' }
      );

      tl.fromTo(
        carousel[1],
        { x: '100%' },
        { x: '-100%', ease: 'none' },
        0
      );
    });
  }
}
