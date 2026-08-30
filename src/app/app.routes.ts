import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'acerca',
    loadComponent: () => import('./acerca/acerca.page').then((m) => m.AcercaPage),
  },
];
