import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  FrontendFeatureCustomerCatalogProductsListCardViewComponent,
  FrontendFeatureCustomerCatalogProductsListListViewComponent,
} from '@iorder-next/frontend/feature/customer/catalog/products/products-list';
import { CatalogProductsStore } from '@iorder-next/frontend/repository/customer/catalog/products';

@Component({
  selector: 'io-customer-widget-catalog-products-list',
  standalone: true,
  imports: [
    FrontendFeatureCustomerCatalogProductsListListViewComponent,
    FrontendFeatureCustomerCatalogProductsListCardViewComponent
  ],
  templateUrl: './frontend-widget-customer-catalog-products-list.component.html',
  styleUrl: './frontend-widget-customer-catalog-products-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    CatalogProductsStore
  ]
})
export class FrontendWidgetCustomerCatalogProductsListComponent {}
