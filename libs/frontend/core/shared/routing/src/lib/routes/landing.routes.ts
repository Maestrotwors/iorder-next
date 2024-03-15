import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('@io/frontend/page/landing/main').then(c => c.FrontendPageLandingMainComponent),
  },
  {
    path: 'login',
    loadComponent: () => import('@io/frontend/page/landing/sign-in').then(c => c.FrontendPageLandingSignInComponent),
  },
];
