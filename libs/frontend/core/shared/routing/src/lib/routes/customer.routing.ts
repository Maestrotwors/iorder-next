import { Routes } from '@angular/router';
import { CustomerRoutePath } from '../paths/customer.route-path';

export const routes: Routes = [
  {
    path: "",
    loadComponent: () => import('@iorder-next/frontend/page/customer/main').then(c => c.FrontendPageCustomerMainComponent),
    children: [
      {
        path: CustomerRoutePath.SuppliersSelection,
        loadComponent: () =>
          import('@iorder-next/frontend/page/customer/supplier-select').then(c => c.FrontendPageCustomerSupplierSelectComponent),
      },
      {
        path: '',
        loadComponent: () =>
          import('@iorder-next/frontend/page/customer/selected-customer-point').then(
            c => c.FrontendPageCustomerSelectedCustomerPointComponent,
          ),
        children: [
          {
            path: CustomerRoutePath.Catalog,
            loadComponent: () => import('@iorder-next/frontend/page/customer/catalog').then(c => c.FrontendPageCustomerCatalogComponent),
            children: [
              {
                path: '',
                loadComponent: () =>
                  import('@iorder-next/frontend/page/customer/products').then(c => c.FrontendPageCustomerProductsComponent),
              },
              {
                path: ':id',
                loadComponent: () =>
                  import('@iorder-next/frontend/page/customer/products').then(c => c.FrontendPageCustomerProductsComponent),
              },
              {
                path: 'product/:productId',
                loadComponent: () => import('@iorder-next/frontend/page/customer/product').then(c => c.FrontendPageCustomerProductComponent),
              },
            ],
          },
          {
            path: CustomerRoutePath.Order,
            loadComponent: () => import('@iorder-next/frontend/page/customer/order').then(c => c.FrontendPageCustomerOrderComponent),
          },
        ],
      },
    ],
  }
];
