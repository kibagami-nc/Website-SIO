import { Component, signal, HostListener } from '@angular/core';

@Component({
    selector: 'app-navbar',
    standalone: true,
    templateUrl: './pub-navbar.html',
    styleUrl: './pub-navbar.css',
    imports: []
})
export class NavbarComponent {
    isMenuOpen = signal(false);
  isScrolled = false;

    toggleMenu() {
        this.isMenuOpen.set(!this.isMenuOpen());
    }

    @HostListener('window:scroll', [])
    onScroll() {
      this.isScrolled = window.scrollY > 0;

  }
}
