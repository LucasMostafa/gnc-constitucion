import { Component, Inject, OnInit } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
import { Router, NavigationEnd, RouterModule } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.scss'],
  imports: [CommonModule, RouterModule]
})
export class Navbar implements OnInit {
  readonly NAVBAR_HEIGHT = 72;
  isOpen = false;
  isMatafuegosRoute = false; // Variable para controlar el color

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private router: Router
  ) {}

  ngOnInit() {
    // Escuchamos los cambios de ruta
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      // Si la URL contiene 'matafuegos', activamos el modo rojo
      this.isMatafuegosRoute = event.urlAfterRedirects.includes('/matafuegos');
    });
  }

  toggleMenu() {
    this.isOpen = !this.isOpen;
  }

  // Nota: Ya no necesitamos onNavigate complejo porque usamos anchorScrolling en app.config
  // Pero dejamos este metodo simple para cerrar el menu si es necesario
  closeMenu() {
    this.isOpen = false;
  }
}