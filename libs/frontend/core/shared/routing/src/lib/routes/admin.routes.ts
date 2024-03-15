import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('@io/frontend/page/admin/main').then(c => c.FrontendPageAdminMainComponent),
  },
];
