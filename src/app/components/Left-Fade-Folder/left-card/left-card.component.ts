import { AfterViewInit, Component } from '@angular/core';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-left-card',
  standalone: true,
  imports: [],
  templateUrl: './left-card.component.html',
  styleUrl: './left-card.component.scss'
})
export class LeftCardComponent implements AfterViewInit {
  ngAfterViewInit(): void {

    let pinGroups = gsap.utils.toArray(".pin-group");
    let pinGroupContent = gsap.utils.toArray(".pin-group > *");
  
    pinGroups.forEach((pingroup: any) => {
      ScrollTrigger.create({
        trigger: pingroup,
        start: "center center",
        end: "+=" + window.innerHeight / 2,
        pin: true
      });
    });
  
    gsap.set(pinGroupContent, {
      opacity: 0,
      x: 100
    });
  
    const enterConfig = { x: 0, opacity: 1, duration: 0.4 };
  
    pinGroupContent.forEach((e: any, i) => {
      ScrollTrigger.create({
        trigger: e,
        start: "center 80%",
        end: "bottom 40%",
        onEnter: () => gsap.to(e, enterConfig),
        onEnterBack: () => gsap.to(e, enterConfig),
        onLeave: () => gsap.to(e, { x: -100, opacity: 0, duration: 0.4 }),
        onLeaveBack: () => gsap.to(e, { x: 100, opacity: 0, duration: 0.4 })
      });
    });
  }
  
  
}
