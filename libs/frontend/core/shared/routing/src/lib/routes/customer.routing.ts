import { Routes } from '@angular/router';
import { checkCustomerPositionGuard } from '../guards/customer/check-customer-position.guard';
import { checkCatalogPageGuard } from '../guards/customer/check-catalog-page.guard';
import { CustomerRoutePath } from '@iorder-next/frontend/core/shared/routing-paths';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('@iorder-next/frontend/page/customer/main').then(c => c.FrontendPageCustomerMainComponent),
    children: [
      {
        path: CustomerRoutePath.SuppliersSelection,
        loadComponent: () =>
          import('@iorder-next/frontend/page/customer/supplier-select').then(c => c.FrontendPageCustomerSupplierSelectComponent),
      },
      {
        path: CustomerRoutePath.Order,
        loadComponent: () => import('@iorder-next/frontend/page/customer/order').then(c => c.FrontendPageCustomerOrderComponent),
      },
      {
        path: CustomerRoutePath.Contact,
        loadComponent: () => import('@iorder-next/frontend/page/customer/contact-us').then(c => c.FrontendPageCustomerContactUsComponent),
      },
      {
        path: '',
        loadComponent: () =>
          import('@iorder-next/frontend/page/customer/selected-customer-point').then(
            c => c.FrontendPageCustomerSelectedCustomerPointComponent,
          ),
        canActivate: [checkCustomerPositionGuard],
        children: [
          {
            path: CustomerRoutePath.Catalog,
            loadComponent: () => import('@iorder-next/frontend/page/customer/catalog').then(c => c.FrontendPageCustomerCatalogComponent),
            children: [
              {
                path: ':categoryId',
                loadComponent: () =>
                  import('@iorder-next/frontend/page/customer/products').then(c => c.FrontendPageCustomerProductsComponent),
                canActivate: [checkCatalogPageGuard],
              },
              {
                path: 'product/:productId',
                loadComponent: () =>
                  import('@iorder-next/frontend/page/customer/product').then(c => c.FrontendPageCustomerProductComponent),
              },
              {
                path: '',
                loadComponent: () =>
                  import('@iorder-next/frontend/page/customer/products').then(c => c.FrontendPageCustomerProductsComponent),
                canActivate: [checkCatalogPageGuard],
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
  },
];
