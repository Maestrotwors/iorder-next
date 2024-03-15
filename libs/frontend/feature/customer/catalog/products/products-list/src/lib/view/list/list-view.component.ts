import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CatalogProductsStore } from '@io/frontend/core/customer/store/catalog/products';

@Component({
  selector: 'io-customer-feature-catalog-products-list-list-view',
  standalone: true,
  imports: [],
  templateUrl: './list-view.component.html',
  styleUrl: './list-view.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FrontendFeatureCustomerCatalogProductsListListViewComponent {
  readonly productsStore = inject(CatalogProductsStore);
}
