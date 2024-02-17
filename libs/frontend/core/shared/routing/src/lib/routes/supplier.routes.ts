export const supplierRoutes = {
  path: 'member-supplier',
  loadComponent: () => import('@iorder-next/frontend/page/supplier/main').then(c => c.FrontendPageSupplierMainComponent)
};
