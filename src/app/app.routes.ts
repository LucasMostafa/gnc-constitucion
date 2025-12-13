/*import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Servicios } from './pages/servicios/servicios'; // ¿Seguro son paginas aparte? (*) Leer nota abajo
import { Contacto } from './pages/contacto/contacto';
import { Turnos } from './pages/turnos/turnos';
import { Matafuegos } from './pages/matafuegos/matafuegos';

export const routes: Routes = [
  // 1. Si la ruta está vacía, redirigir explícitamente al home
  { path: '', redirectTo: '/home', pathMatch: 'full' },

  // 2. Rutas principales
  { path: 'home', component: Home },
  { path: 'matafuegos', component: Matafuegos },

  // 3. Estas rutas déjalas SOLO si querés que sean páginas separadas con URL propia (/turnos)
  // Si en el home usas anclas (#turnos), estas podrían sobrar, pero mal no hacen.
  { path: 'turnos', component: Turnos },
  { path: 'servicios', component: Servicios },
  { path: 'contacto', component: Contacto },

  // 4. El comodín SIEMPRE AL FINAL (Manejo de error 404)
  // Cualquier cosa rara que escriban, vuelve al home.
  { path: '**', redirectTo: 'home' } 
];*/

import { Routes } from '@angular/router';
import { Home } from './pages/home/home'; // Tu componente Home actual (con toda su lógica)
import { Matafuegos } from './pages/matafuegos/matafuegos';

export const routes: Routes = [
  // Si no ponen nada, van al home
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  
  // Tu Home actual (NO HAY QUE TOCARLE NADA ADENTRO)
  { path: 'home', component: Home },

  // La nueva sección
  { path: 'matafuegos', component: Matafuegos },

  // Comodín
  { path: '**', redirectTo: 'home' }
];