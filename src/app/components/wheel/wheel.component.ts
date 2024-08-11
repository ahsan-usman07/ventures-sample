import { AfterViewInit, Component } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);


@Component({
  selector: 'app-wheel',
  standalone: true,
  imports: [],
  templateUrl: './wheel.component.html',
  styleUrl: './wheel.component.scss'
})
export class WheelComponent implements AfterViewInit {
  ngAfterViewInit() {
    this.initScrollAnimation();
  }


 
  initScrollAnimation() {
    const boxes = document.querySelectorAll('.simple-box');

    boxes.forEach((box, index) => {
        ScrollTrigger.create({
            trigger: box,
            start: "top center",
            end: "bottom center",
            scrub: true,
            onEnter: () => this.toggleClasses(boxes, index, 'enter'),
            onLeave: () => this.toggleClasses(boxes, index + 1, 'leave'),
            onEnterBack: () => this.toggleClasses(boxes, index, 'enterBack'),
            onLeaveBack: () => this.toggleClasses(boxes, index - 1, 'leaveBack')
        });
    });
  }

  toggleClasses(boxes: NodeListOf<Element>, currentIndex: number, action: string) {
    boxes.forEach((box, index) => {
      box.classList.remove('trapezoid', 'new-trapezoid');
      if (index < currentIndex) {
        box.classList.add('trapezoid');
      } else if (index > currentIndex) {
        box.classList.add('new-trapezoid');
      }
    });
  }
}
