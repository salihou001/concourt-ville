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
];
