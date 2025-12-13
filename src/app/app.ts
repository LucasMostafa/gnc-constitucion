import { CommonModule, ViewportScroller } from '@angular/common'; // <--- 1. Importamos ViewportScroller
import { Component, OnInit, signal } from '@angular/core'; // <--- 2. Importamos OnInit
import { RouterLink, RouterOutlet } from '@angular/router';
import { Navbar } from './shared/navbar/navbar';
import { Footer } from "./shared/footer/footer";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterLink, CommonModule, RouterOutlet, Navbar, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  // OJO: Tenés definido templateUrl y template a la vez. 
  // Angular usará este inline (template) y ignorará el .html.
  template: `
    <app-navbar></app-navbar>
    <main class="container my-4">
      <router-outlet></router-outlet>
    </main>
    <app-footer></app-footer> 
  `
})
export class App implements OnInit { // <--- 3. Implementamos la interfaz
  protected readonly title = signal('gnc-constitucion');

  // 4. Inyectamos el scroller
  constructor(private viewportScroller: ViewportScroller) {}

  ngOnInit() {
    // 5. Configuramos el offset (X, Y)
    // [0, 80] significa: "Frená 80px antes del elemento en el eje Y"
    this.viewportScroller.setOffset([0, 72]); 
  }
}