import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('@io/frontend/page/supplier/main').then(c => c.FrontendPageSupplierMainComponent),
  },
];
