import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Servicios } from './pages/servicios/servicios';
import { Contacto } from './pages/contacto/contacto';
import { Turnos } from './pages/turnos/turnos';

export const routes: Routes = [
  { path: '', component: Home, pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'turnos', component: Turnos },
  { path: 'servicios', component: Servicios },
  { path: 'contacto', component: Contacto },
  { path: '**', redirectTo: '' },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadComponent: () => import('./pages/home/home').then(m => m.Home) },
  { path: 'servicios', loadComponent: () => import('./pages/servicios/servicios').then(m => m.Servicios) },
  { path: 'turnos', loadComponent: () => import('./pages/turnos/turnos').then(m => m.Turnos) },
  { path: 'contacto', loadComponent: () => import('./pages/contacto/contacto').then(m => m.Contacto) },
];

