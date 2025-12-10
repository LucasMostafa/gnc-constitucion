import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Navbar } from './shared/navbar/navbar';
import { Footer } from "./shared/footer/footer";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterLink, CommonModule, RouterOutlet, Navbar, Footer],
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
