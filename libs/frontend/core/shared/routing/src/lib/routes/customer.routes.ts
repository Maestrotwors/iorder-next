import { CustomerRoutePath } from '../paths/customer.route-path';

export const customerRoutes = {
  path: 'member-user',
  loadComponent: () => import('@iorder-next/frontend/page/customer/main').then(c => c.FrontendPageCustomerMainComponent),
  children: [
    {
      path: CustomerRoutePath.SuppliersSelection,
      loadComponent: () => import('@iorder-next/frontend/page/customer/supplier-select').then(c => c.FrontendPageCustomerSupplierSelectComponent)
    },
    {
      path: '',
      loadComponent: () => import('@iorder-next/frontend/page/customer/selected-customer-point').then(c => c.FrontendPageCustomerSelectedCustomerPointComponent),
      children: [
        {
          path: CustomerRoutePath.Catalog,
          loadComponent: () => import('@iorder-next/frontend/page/customer/catalog').then(c => c.FrontendPageCustomerCatalogComponent),
        },
        {
          path: CustomerRoutePath.Order,
          loadComponent: () => import('@iorder-next/frontend/page/customer/order').then(c => c.FrontendPageCustomerOrderComponent),
        }
      ]
    }
  ]
};
