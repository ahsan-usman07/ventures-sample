import { AfterViewInit, Component, HostListener } from '@angular/core';
import { gsap, Power2, TweenMax } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-new-team',
  standalone: true,
  imports: [],
  templateUrl: './new-team.component.html',
  styleUrl: './new-team.component.scss'
})
export class NewTeamComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    const pinGroups = gsap.utils.toArray(".pin-group");
    const pinGroupContent = gsap.utils.toArray(".pin-group > *");
  
    pinGroups.forEach((pingroup: any) => {
      ScrollTrigger.create({
        trigger: pingroup,
        start: "center center",
        end: "+=" + (window.innerHeight / 2), // Reduce the pinning duration
        pin: true
      });
    });
  
    gsap.set(pinGroupContent, {
      opacity: 0,
      x: -100,
      y: 100,
      scale: 0.8
    });
  
    const enterConfig = { x: 0, y: 0, opacity: 1, scale: 1, duration: 1 }; // Increase duration to 1 second
    const leaveConfig = { x: -100, y: -100, opacity: 0, scale: 0.8, duration: 1 }; // Increase duration to 1 second
  
    pinGroupContent.forEach((e: any, i) => {
      ScrollTrigger.create({
        trigger: e,
        start: "top 90%", // Adjust start position for more gradual transition
        end: "top 20%", // Adjust end position for more gradual transition
        onEnter: () => gsap.to(e, enterConfig),
        onEnterBack: () => gsap.to(e, enterConfig),
        onLeave: () => gsap.to(e, leaveConfig),
        onLeaveBack: () => gsap.to(e, leaveConfig),
        scrub: true // Add scrub for smoother transitions
      });
    });
  }
}
