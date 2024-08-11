import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appAppScrollNarrow]',
  standalone: true
})
export class AppScrollNarrowDirective {


  constructor(private el: ElementRef, private renderer: Renderer2) { }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const card = this.el.nativeElement;
    const cardPosition = card.getBoundingClientRect().top;
    const viewportHeight = window.innerHeight;

    if (cardPosition < viewportHeight / 2 && cardPosition > -viewportHeight / 2) {
      this.renderer.addClass(card, 'narrow');
    } else {
      this.renderer.removeClass(card, 'narrow');
    }
  }

}
