import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { ScrollTrigger } from "gsap/all";
import gsap from 'gsap';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-parallax',
  standalone: true,
  imports: [],
  templateUrl: './parallax.component.html',
  styleUrl: './parallax.component.scss'
})
export class ParallaxComponent implements AfterViewInit {
  @ViewChild('main', { static: true }) main!: ElementRef;

  constructor() { }

  ngOnInit(): void { }

  ngAfterViewInit(): void {
    const boxes = this.main.nativeElement.querySelectorAll('.box');
    boxes.forEach((box: HTMLElement) => {
      gsap.to(box, {
        x: 150,
        scrollTrigger: {
          trigger: box,
          start: 'bottom bottom',
          end: 'top 20%',
          scrub: true,
          // markers: true,
        },
      });
    });
  }
}
