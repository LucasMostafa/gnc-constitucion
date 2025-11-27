import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Navbar } from './shared/navbar/navbar';


@Component({
  selector: 'app-root',
  imports: [RouterLink, CommonModule, RouterOutlet, Navbar],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  template: `
    <app-navbar></app-navbar>
    <main class="container my-4">
      <router-outlet></router-outlet>
    </main>
  `
})
export class App {
  protected readonly title = signal('gnc-constitucion');
}
