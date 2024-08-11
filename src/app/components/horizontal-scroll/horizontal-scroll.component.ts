import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, HostListener } from '@angular/core';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-horizontal-scroll',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './horizontal-scroll.component.html',
  styleUrl: './horizontal-scroll.component.scss'
})
export class HorizontalScrollComponent implements AfterViewInit{
  ngAfterViewInit(): void {
    // const content = document.getElementById('content');
    // gsap.from(content, {
    //   scrollTrigger: {
    //     trigger: content,
    //     start: 'top bottom', // start the animation when the top of the element hits the bottom of the viewport
    //     end: 'bottom top', // end the animation when the bottom of the element hits the top of the viewport
    //   },
    //   opacity: 1,
    //   background: 'red',
    //   y: 100,
    //   duration: 5
    // });
  
  }
  title = 'scroll-effect';

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event): void {
    const container = document.querySelector('.container')!;
    if (window.scrollY > 0) {
      container.classList.add('scrolled');
    } else {
      container.classList.remove('scrolled');
    }
  }

}
