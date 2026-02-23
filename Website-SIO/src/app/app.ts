import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/pub-navbar/pub-navbar';
import { HeroComponent } from './components/index-hero/index-hero';
import { FormationComponent } from './components/index-formation/index-formation';
import { FooterComponent } from './components/pub-footer/pub-footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, HeroComponent, FormationComponent, FooterComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Website-SIO');
}
