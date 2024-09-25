import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent)
      },
      {
        path: 'hotels',
        loadComponent: () => import('./pages/hotels/hotels.component').then(m => m.HotelsComponent)
      },
      {
        path: 'restaurants',
        loadComponent: () => import('./pages/restaurants/restaurants.component').then(m => m.RestaurantsComponent)
      },
      {
        path: 'nocturnes',
        loadComponent: () => import('./pages/nocturne/nocturne.component').then(m => m.NocturneComponent)
      },
      {
        path: 'divertissements',
        loadComponent: () => import('./pages/divertissements/divertissements.component').then(m => m.DivertissementsComponent)
      },
];
