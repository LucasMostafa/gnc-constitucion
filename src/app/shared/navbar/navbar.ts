import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterModule, RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
  template: `
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark px-3">
      <a class="navbar-brand fw-bold" routerLink="/">GNC Taller</a>

      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
              aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <a class="nav-link" routerLink="/home" routerLinkActive="active" [routerLinkActiveOptions]="{exact:true}">Inicio</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" routerLink="/turnos" routerLinkActive="active">Turnos</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" routerLink="/presupuestos" routerLinkActive="active">Presupuestos</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" routerLink="/clientes" routerLinkActive="active">Clientes</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" routerLink="/vehiculos" routerLinkActive="active">Vehículos</a>
          </li>
        </ul>
      </div>
    </nav>
  `
})

export class Navbar {
}
