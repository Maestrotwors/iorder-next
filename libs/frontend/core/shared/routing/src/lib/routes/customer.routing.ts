import { Routes } from '@angular/router';
import { checkCustomerPositionGuard } from '../guards/customer/check-customer-position.guard';
import { checkCatalogPageGuard } from '../guards/customer/check-catalog-page.guard';
import { CustomerRoutePath } from '@io/frontend/core/shared/routing-paths';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('@io/frontend/page/customer/main').then(c => c.FrontendPageCustomerMainComponent),
    children: [
      {
        path: CustomerRoutePath.SuppliersSelection,
        loadComponent: () => import('@io/frontend/page/customer/supplier-select').then(c => c.FrontendPageCustomerSupplierSelectComponent),
      },
      {
        path: CustomerRoutePath.Order,
        loadComponent: () => import('@io/frontend/page/customer/order').then(c => c.FrontendPageCustomerOrderComponent),
      },
      {
        path: CustomerRoutePath.Contact,
        loadComponent: () => import('@io/frontend/page/customer/contact-us').then(c => c.FrontendPageCustomerContactUsComponent),
      },
      {
        path: CustomerRoutePath.HowToUse,
        loadComponent: () => import('@io/frontend/page/customer/how-to-use').then(c => c.FrontendPageCustomerHowToUseComponent),
      },
      {
        path: CustomerRoutePath.Rules,
        loadComponent: () => import('@io/frontend/page/customer/rules').then(c => c.FrontendPageCustomerRulesComponent),
      },
      {
        path: CustomerRoutePath.Refund,
        loadComponent: () => import('@io/frontend/page/customer/refund').then(c => c.FrontendPageCustomerRefundComponent),
      },
      {
        path: CustomerRoutePath.Delivery,
        loadComponent: () => import('@io/frontend/page/customer/delivery').then(c => c.FrontendPageCustomerDeliveryComponent),
      },
      {
        path: '',
        loadComponent: () =>
          import('@io/frontend/page/customer/selected-customer-point').then(c => c.FrontendPageCustomerSelectedCustomerPointComponent),
        canActivate: [checkCustomerPositionGuard],
        children: [
          {
            path: CustomerRoutePath.Catalog,
            loadComponent: () => import('@io/frontend/page/customer/catalog').then(c => c.FrontendPageCustomerCatalogComponent),
            children: [
              {
                path: ':categoryId',
                loadComponent: () => import('@io/frontend/page/customer/products').then(c => c.FrontendPageCustomerProductsComponent),
                canActivate: [checkCatalogPageGuard],
              },
              {
                path: 'product/:productId',
                loadComponent: () => import('@io/frontend/page/customer/product').then(c => c.FrontendPageCustomerProductComponent),
              },
              {
                path: '',
                loadComponent: () => import('@io/frontend/page/customer/products').then(c => c.FrontendPageCustomerProductsComponent),
                canActivate: [checkCatalogPageGuard],
              },
            ],
          },
          {
            path: CustomerRoutePath.Order,
            loadComponent: () => import('@io/frontend/page/customer/order').then(c => c.FrontendPageCustomerOrderComponent),
          },
        ],
      },
    ],
  },
];
