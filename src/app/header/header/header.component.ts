import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, HostListener, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit, AfterViewInit {
  private lastScrollTop = 0;

  isNavbarOpen = false;

  toggleNavbar() {
    this.isNavbarOpen = !this.isNavbarOpen;
  }

  ngOnInit() {
    this.updateNavbarVisibility();
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.updateNavbarVisibility();
  }

  private updateNavbarVisibility() {
    const navbar = document.querySelector('.autohide') as HTMLElement;
    const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScrollTop > this.lastScrollTop) {
      // Scrolling down
      navbar.classList.add('hide');
    } else {
      // Scrolling up or at the top
      navbar.classList.remove('hide');
    }

    this.lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop; // For Mobile or negative scrolling
  }

  closeNavbar() {
    this.isNavbarOpen = false;
    const navbarCollapse = document.querySelector('.navbar-collapse');
    if (navbarCollapse) {
      const collapseInstance = new (window as any).bootstrap.Collapse(navbarCollapse, {
        toggle: false
      });
      collapseInstance.hide();
    }
  }

  ngAfterViewInit() {
    // Ensure the initial state of the navbar is collapsed
    this.closeNavbar();
  }
}
