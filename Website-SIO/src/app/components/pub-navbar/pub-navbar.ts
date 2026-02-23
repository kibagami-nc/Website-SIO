import { Component, signal } from '@angular/core';

@Component({
    selector: 'app-navbar',
    standalone: true,
    templateUrl: './pub-navbar.html',
    styleUrl: './pub-navbar.css',
    imports: []
})
export class NavbarComponent {
    isMenuOpen = signal(false);

    toggleMenu() {
        this.isMenuOpen.set(!this.isMenuOpen());
    }
}
