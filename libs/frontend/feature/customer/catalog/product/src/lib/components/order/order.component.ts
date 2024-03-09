import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ProductFeatureShared } from '../../shared/product-feature.shared';

@Component({
  standalone: true,
  imports: [],
  selector: 'iorder-next-customer-feature-catalog-product-order',
  template: ` <div>iorder-next-customer-feature-catalog-product-order</div> `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FrontendFeatureCustomerCatalogProductOrderComponent extends ProductFeatureShared {}
