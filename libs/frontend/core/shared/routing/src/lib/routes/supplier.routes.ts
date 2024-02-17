import { RootRoutePath } from '../paths/root.route-path';

export const supplierRoutes = {
  path: RootRoutePath.Supplier,
  loadComponent: () => import('@iorder-next/frontend/page/supplier/main').then(c => c.FrontendPageSupplierMainComponent)
};
