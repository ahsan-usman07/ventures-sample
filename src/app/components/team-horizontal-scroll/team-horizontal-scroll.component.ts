import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-team-horizontal-scroll',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './team-horizontal-scroll.component.html',
  styleUrl: './team-horizontal-scroll.component.scss'
})
export class TeamHorizontalScrollComponent implements OnInit, AfterViewInit {
  ngOnInit(): void {
   
  }
  constructor(private renderer: Renderer2){}
  @ViewChild('container') container!: ElementRef;
  @ViewChild('container2') container2!: ElementRef;


  testimonials = [
    { name: 'Xayrulla Hamidov', role: 'Sports commentator', text: 'FinTap combines speed and simplicity, making financial management as smooth and efficient as a pro sports move. A true fintech winner.', image: 'path/to/image1.jpg' },
    { name: 'Lehman Cozy', role: 'Artist', text: 'FinTap simplifies my financial transactions as an artist, letting me focus more on creativity. Fast, easy, and reliable!', image: 'path/to/image2.jpg' },
    { name: 'Xayrulla Hamidov', role: 'Sports commentator', text: 'FinTap combines speed and simplicity, making financial management as smooth and efficient as a pro sports move. A true fintech winner.', image: 'path/to/image1.jpg' },
    { name: 'Xayrulla Hamidov', role: 'Sports commentator', text: 'FinTap combines speed and simplicity, making financial management as smooth and efficient as a pro sports move. A true fintech winner.', image: 'path/to/image1.jpg' },
    { name: 'Xayrulla Hamidov', role: 'Sports commentator', text: 'FinTap combines speed and simplicity, making financial management as smooth and efficient as a pro sports move. A true fintech winner.', image: 'path/to/image1.jpg' },
    { name: 'Xayrulla Hamidov', role: 'Sports commentator', text: 'FinTap combines speed and simplicity, making financial management as smooth and efficient as a pro sports move. A true fintech winner.', image: 'path/to/image1.jpg' },
    { name: 'Xayrulla Hamidov', role: 'Sports commentator', text: 'FinTap combines speed and simplicity, making financial management as smooth and efficient as a pro sports move. A true fintech winner.', image: 'path/to/image1.jpg' },
    { name: 'Xayrulla Hamidov', role: 'Sports commentator', text: 'FinTap combines speed and simplicity, making financial management as smooth and efficient as a pro sports move. A true fintech winner.', image: 'path/to/image1.jpg' },
    { name: 'Xayrulla Hamidov', role: 'Sports commentator', text: 'FinTap combines speed and simplicity, making financial management as smooth and efficient as a pro sports move. A true fintech winner.', image: 'path/to/image1.jpg' },
    { name: 'Xayrulla Hamidov', role: 'Sports commentator', text: 'FinTap combines speed and simplicity, making financial management as smooth and efficient as a pro sports move. A true fintech winner.', image: 'path/to/image1.jpg' },
    // add other testimonials here
  ];

  
  ngAfterViewInit() {
    this.renderer.setStyle(this.container.nativeElement, '--testimonial-count', this.testimonials.length);
    this.renderer.setStyle(this.container2.nativeElement, '--testimonial-count', this.testimonials.length);
    this.setupScrollTrigger();
    this.setupScrollTriggerReverse();
  }

  setupScrollTrigger() {
    gsap.to(this.container.nativeElement, {
      xPercent: -100 * (this.testimonials.length - 1),
      ease: 'none',
      scrollTrigger: {
        trigger: this.container.nativeElement,
        pin: true,
        scrub: 1,
        start: "ceneter top", // Start when the container is in the center of the viewport
        end: () => "+=" + this.container.nativeElement.offsetWidth
      }
    });
  }
  

  setupScrollTriggerReverse() {
    gsap.to(this.container2.nativeElement, {
      xPercent: 100 * (this.testimonials.length - 1),
      ease: 'none',
      scrollTrigger: {
        trigger: this.container2.nativeElement,
        pin: true,
        scrub: 1,
        start: 'center center',
        end: () => '+=' + this.container2.nativeElement.offsetWidth
      }
    });
  }
  

}
