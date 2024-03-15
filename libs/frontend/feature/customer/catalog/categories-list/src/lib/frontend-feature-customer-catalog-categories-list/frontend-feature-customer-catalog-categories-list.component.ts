import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CatalogCategoriesStore } from '@io/frontend/core/customer/store/catalog/categories';

@Component({
  selector: 'io-customer-feature-catalog-categories-list',
  standalone: true,
  imports: [],
  templateUrl: './frontend-feature-customer-catalog-categories-list.component.html',
  styleUrl: './frontend-feature-customer-catalog-categories-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FrontendFeatureCustomerCatalogCategoriesListComponent {
  readonly categoriesStore = inject(CatalogCategoriesStore);
}
