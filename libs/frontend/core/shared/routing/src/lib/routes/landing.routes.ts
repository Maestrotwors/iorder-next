import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('@iorder-next/frontend/page/landing/main').then(c => c.FrontendPageLandingMainComponent),
  },
  {
    path: 'login',
    loadComponent: () => import('@iorder-next/frontend/page/landing/sign-in').then(c => c.FrontendPageLandingSignInComponent),
  },
];
