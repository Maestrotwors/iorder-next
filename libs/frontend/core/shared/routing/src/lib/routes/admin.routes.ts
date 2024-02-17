export const adminRoutes = {
  path: 'admin',
  loadComponent: () => import('@iorder-next/frontend/page/admin/main').then(c => c.FrontendPageAdminMainComponent)
};
