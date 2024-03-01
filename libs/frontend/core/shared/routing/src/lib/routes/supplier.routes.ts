import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: "",
    loadComponent: () => import('@iorder-next/frontend/page/supplier/main').then(c => c.FrontendPageSupplierMainComponent),
  }
];
