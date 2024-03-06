import { Routes } from '@angular/router';
import { CustomerRoutePath } from '../paths/customer.route-path';
import { checkCustomerPositionGuard } from '../guards/customer/check-customer-position.guard';
import { checkCatalogPageGuard } from '../guards/customer/check-catalog-page.guard';

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
        path: '',
        loadComponent: () =>
          import('@iorder-next/frontend/page/customer/selected-customer-point').then(
            c => c.FrontendPageCustomerSelectedCustomerPointComponent,
          ),
          //canActivate: [checkCustomerPositionGuard],
        children: [
          {
            path: CustomerRoutePath.Catalog,
            loadComponent: () => import('@iorder-next/frontend/page/customer/catalog').then(c => c.FrontendPageCustomerCatalogComponent),
            children: [
              {
                path: '',
                loadComponent: () =>
                  import('@iorder-next/frontend/page/customer/products').then(c => c.FrontendPageCustomerProductsComponent),
                canActivate: []
              },
              {
                path: ':categoryId',
                loadComponent: () =>
                  import('@iorder-next/frontend/page/customer/products').then(c => c.FrontendPageCustomerProductsComponent),
                //canActivate: [checkCatalogPageGuard]
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
