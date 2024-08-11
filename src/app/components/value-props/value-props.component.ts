import { AfterViewInit, Component, OnInit } from '@angular/core';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
@Component({
  selector: 'app-value-props',
  standalone: true,
  imports: [],
  templateUrl: './value-props.component.html',
  styleUrl: './value-props.component.scss'
})
export class ValuePropsComponent implements AfterViewInit, OnInit{
  ngAfterViewInit() {
    this.rotateCircle();
    // this.setupScrollTrigger();
  }

  // setupScrollTrigger(): void {
  //   const mainCircle = document.getElementById('main-circle');
  //   const scrollContainer = document.getElementById('scroll-container');
  //   const circles = [
  //     { el: '#top-left', section: '#section-1' },
  //     { el: '#top-right', section: '#section-2' },
  //     { el: '#bottom-left', section: '#section-3' },
  //     { el: '#bottom-right', section: '#section-4' },
  //   ];

  //   circles.forEach((circle, index) => {
  //     ScrollTrigger.create({
  //       trigger: circle.section,
  //       start: 'top center',
  //       end: 'bottom center',
  //       scroller: scrollContainer,
  //       onEnter: () => this.rotateCircle(index, mainCircle as any, circles),
  //       onEnterBack: () => this.rotateCircle(index, mainCircle as any, circles),
  //     });
  //   });
  // }

  // rotateCircle(index: number, mainCircle: HTMLElement, circles: { el: string, section: string }[]): void {
  //   const angle = index * 90;
  //   gsap.to(mainCircle, {
  //     rotate: angle,
  //     duration: 1,
  //     onComplete: () => {
  //       gsap.to(circles[index].el, { scale: 1.2, duration: 0.5 });
  //     },
  //     onStart: () => {
  //       circles.forEach((circle, idx) => {
  //         if (idx !== index) {
  //           gsap.to(circle.el, { scale: 1, duration: 0.5 });
  //         }
  //       });
  //     }
  //   });

  //   // Maintain inner circles' orientation
  //   circles.forEach(circle => {
  //     gsap.to(circle.el, {
  //       rotate: -angle,
  //       duration: 1,
  //       transformOrigin: 'center center',
  //     });
  //   });
  // }


  rotateCircle() {
    const mainTimeline = gsap.timeline({ repeat: -1, ease: 'linear' });
    const duration = 20; // duration of one full rotation in seconds
    const pauseDuration = 2; // pause duration in seconds

    const quarterDuration = duration / 4;

    mainTimeline.to('#main-circle', {
      duration: quarterDuration,
      rotate: 90,
      ease: 'linear',
      onComplete: () => this.scaleCircle('#top-left', 1.2)
    })
    .add(() => {
      gsap.delayedCall(pauseDuration, () => {
        this.scaleCircle('#top-left', 1);
        mainTimeline.play();
      });
      mainTimeline.pause();
    })
    .to('#main-circle', {
      duration: quarterDuration,
      rotate: 180,
      ease: 'linear',
      onComplete: () => this.scaleCircle('#top-right', 1.2)
    })
    .add(() => {
      gsap.delayedCall(pauseDuration, () => {
        this.scaleCircle('#top-right', 1);
        mainTimeline.play();
      });
      mainTimeline.pause();
    })
    .to('#main-circle', {
      duration: quarterDuration,
      rotate: 270,
      ease: 'linear',
      onComplete: () => this.scaleCircle('#bottom-left', 1.2)
    })
    .add(() => {
      gsap.delayedCall(pauseDuration, () => {
        this.scaleCircle('#bottom-left', 1);
        mainTimeline.play();
      });
      mainTimeline.pause();
    })
    .to('#main-circle', {
      duration: quarterDuration,
      rotate: 360,
      ease: 'linear',
      onComplete: () => this.scaleCircle('#bottom-right', 1.2)
    })
    .add(() => {
      gsap.delayedCall(pauseDuration, () => {
        this.scaleCircle('#bottom-right', 1);
        mainTimeline.play();
      });
      mainTimeline.pause();
    });

    // Adding reverse rotations to inner circles to maintain their orientation
    mainTimeline.to('#top-left', {
      duration: duration,
      rotate: -360,
      ease: 'linear'
    }, 0);

    mainTimeline.to('#top-right', {
      duration: duration,
      rotate: -360,
      ease: 'linear'
    }, 0);

    mainTimeline.to('#bottom-left', {
      duration: duration,
      rotate: -360,
      ease: 'linear'
    }, 0);

    mainTimeline.to('#bottom-right', {
      duration: duration,
      rotate: -360,
      ease: 'linear'
    }, 0);
  }

  scaleCircle(selector: string, scale: number) {
    gsap.to(selector, { scale: scale, duration: 0.5 });
  }

  ngOnInit(): void {
  
  }
}
