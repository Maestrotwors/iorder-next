import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardProductItemComponent } from './components/product-item/product-item.component';
import { CatalogProductsStore } from '@iorder-next/frontend/core/customer/store/catalog/products';

@Component({
  selector: 'io-customer-feature-catalog-products-list-card-view',
  standalone: true,
  imports: [CommonModule, CardProductItemComponent],
  templateUrl: './card-view.component.html',
  styleUrl: './card-view.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [],
})
export class FrontendFeatureCustomerCatalogProductsListCardViewComponent {
  readonly productsStore = inject(CatalogProductsStore);

  selectProduct(product: any) {
    console.log(product);
    this.productsStore.selectProduct(product.id);
  }
}
