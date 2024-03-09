import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CatalogProductsViewStore } from '@iorder-next/frontend/core/customer/store/catalog/products';
import { FrontendFeatureCustomerCatalogPaginationProductsComponent } from '@iorder-next/frontend/feature/customer/catalog/products/pagination';
import {
  FrontendFeatureCustomerCatalogProductsListCardViewComponent,
  FrontendFeatureCustomerCatalogProductsListListViewComponent,
} from '@iorder-next/frontend/feature/customer/catalog/products/products-list';

@Component({
  selector: 'iorder-next-customer-widget-catalog-products-list',
  standalone: true,
  imports: [
    FrontendFeatureCustomerCatalogProductsListListViewComponent,
    FrontendFeatureCustomerCatalogProductsListCardViewComponent,
    FrontendFeatureCustomerCatalogPaginationProductsComponent,
  ],
  templateUrl: './frontend-widget-customer-catalog-products-list.component.html',
  styleUrl: './frontend-widget-customer-catalog-products-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [],
})
export class FrontendWidgetCustomerCatalogProductsListComponent {
  catalogProductsViewStore = inject(CatalogProductsViewStore);
}
