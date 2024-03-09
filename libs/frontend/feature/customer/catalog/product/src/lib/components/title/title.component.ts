import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ProductFeatureShared } from '../../shared/product-feature.shared';

@Component({
  standalone: true,
  imports: [],
  selector: 'io-customer-feature-catalog-product-title',
  template: `
    @if (currentProduct(); as product) {
      <div class="title" [style.view-transition-name]="'product-' + product.id + '-name'">{{ product.name }}</div>
      <div class="price" [style.view-transition-name]="'product-' + product.id + '-price'">{{ product.price }} грн.</div>
      <div class="available" [style.view-transition-name]="'product-' + product.id + '-available'">Доступно: 1000</div>
    }
  `,
  styles: `
    .title {
      font-size: 18px;
      font-weight: bold;
    }

    .price {
      font-size: 17px;
      font-weight: bold;
      margin: 1rem 0;
    }

    .available {
      color: green;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FrontendFeatureCustomerCatalogProductTitleComponent extends ProductFeatureShared {}
