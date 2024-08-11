import { AfterViewInit, Component } from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-new-marquee-effect',
  standalone: true,
  imports: [],
  templateUrl: './new-marquee-effect.component.html',
  styleUrl: './new-marquee-effect.component.scss'
})
export class NewMarqueeEffectComponent implements AfterViewInit{
  ngAfterViewInit() {
    // Initially position each box in a row with spacing
    gsap.set(".box", {
      x: (i) => i * 320 // 300px width + 20px margin-right
    });

    // Animate boxes
    const boxesTimeline = gsap.to(".box", {
      duration: 20, // Increase duration to make it slower
      ease: "none",
      x: "+=3200", // move each box 3200px to right (10 boxes * 320px)
      modifiers: {
        x: gsap.utils.unitize(x => parseFloat(x) % 3200) // force x value to be between 0 and 3200 using modulus
      },
      repeat: -1
    });

    // Add hover event listeners to each box
    document.querySelectorAll('.box').forEach((box) => {
      box.addEventListener('mouseenter', () => boxesTimeline.pause());
      box.addEventListener('mouseleave', () => boxesTimeline.play());
    });

    // Toggle overflow
    const overflow = document.querySelector("#overflow") as HTMLInputElement;
    overflow.addEventListener("change", () => this.applyOverflow(overflow.checked));
  }

  applyOverflow(isChecked: boolean) {
    if (isChecked) {
      gsap.set(".wrapper", { overflow: "visible" });
    } else {
      gsap.set(".wrapper", { overflow: "hidden" });
    }
  }
}
