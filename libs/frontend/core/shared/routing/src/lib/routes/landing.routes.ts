import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('@iorder-next/frontend/page/landing/main').then(c => c.FrontendPageLandingMainComponent),
  },
];
