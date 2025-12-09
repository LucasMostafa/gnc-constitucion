import { Component, DOCUMENT, Inject } from '@angular/core';
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
          
          
        </ul>
      </div>
    </nav>
  `
})

export class Navbar {
  readonly NAVBAR_HEIGHT = 72; // px => ajustar al alto real de tu navbar

  constructor(@Inject(DOCUMENT) private document: Document) {}

  onNavigate(eventOrId: any, maybeId?: string) {
    // Llamada desde template: (click)="onNavigate($event,'servicios')"
    let id: string | undefined;

    if (typeof eventOrId === 'string') {
      id = eventOrId;
    } else {
      // evento: event, id: maybeId
      eventOrId?.preventDefault();
      id= maybeId;
    }

    // Si no existe id, salimos
    if (!id) { return; }

    // Encontrar el elemento por id (soporta tanto '#id' o 'id')
    id = id.replace(/^#/, '');

    const el = this.document.getElementById(id);
    if (el) {
      // Opcional: cerrar el collapse en mobile (si estás usando bootstrap collapse)
      const collapse = this.document.getElementById('navbarNav');
      if (collapse && collapse.classList.contains('show')) {
        // usamos bootstrap's collapse via JS si existe
        // Si no tenés bootstrap JS, esto no hace nada
        // tslint:disable-next-line: no-unused-expression
        // (window as any).bootstrap?.Collapse?.getInstance(collapse)?.hide();
        collapse.classList.remove('show');
      }

      // Ajuste para navbar fixed-top: calcular offset
      const y = el.getBoundingClientRect().top + window.pageYOffset - this.NAVBAR_HEIGHT + 6; // +6 px breathing

      window.scrollTo({ top: y, behavior: 'smooth' });
    } else {
      // si no está en la página, podés fallbackear a router navigation
      // this.router.navigate([`/${id}`]);
      console.warn(`Elemento con id #${id} no encontrado en la página.`);
    }
  }
}
