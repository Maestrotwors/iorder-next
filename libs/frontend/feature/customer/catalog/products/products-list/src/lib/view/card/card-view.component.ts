import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardProductItemComponent } from './components/product-item/product-item.component';
import { CatalogProductsStore } from '@iorder-next/frontend/core/customer/store/catalog/products';
import { FadeInAnimation } from '@iorder-next/frontend/core/shared/animations';
import { CatalogProductStore, Product } from '@iorder-next/frontend/core/customer/store/catalog/product';
import { ScrollingModule } from '@angular/cdk/scrolling';

@Component({
  selector: 'iorder-next-customer-feature-catalog-products-list-card-view',
  standalone: true,
  imports: [CommonModule, CardProductItemComponent, ScrollingModule],
  templateUrl: './card-view.component.html',
  styleUrl: './card-view.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [FadeInAnimation],
  providers: [],
})
export class FrontendFeatureCustomerCatalogProductsListCardViewComponent {
  readonly productsStore = inject(CatalogProductsStore);
  readonly #productStore = inject(CatalogProductStore);

  selectProduct(product: Product) {
    this.#productStore.setProduct(product);
    this.productsStore.navigateToProduct(product.id);
  }
}
