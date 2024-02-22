import { RootRoutePath } from '../paths/root.route-path';

export const adminRoutes = {
  path: RootRoutePath.Admin,
  loadComponent: () => import('@iorder-next/frontend/page/admin/main').then(c => c.FrontendPageAdminMainComponent),
};
