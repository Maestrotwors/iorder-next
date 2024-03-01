import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  FrontendFeatureCustomerCatalogProductsListCardViewComponent,
  FrontendFeatureCustomerCatalogProductsListListViewComponent,
} from '@iorder-next/frontend/feature/customer/catalog/products/products-list';

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
})
export class FrontendWidgetCustomerCatalogProductsListComponent {}
