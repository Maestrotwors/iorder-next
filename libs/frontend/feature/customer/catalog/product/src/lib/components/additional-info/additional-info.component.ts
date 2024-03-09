import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ProductFeatureShared } from '../../shared/product-feature.shared';

@Component({
  standalone: true,
  imports: [],
  selector: 'iorder-next-customer-feature-catalog-product-additional-info',
  template: `iorder-next-customer-feature-catalog-product-additional-info`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FrontendFeatureCustomerCatalogProductAdditionalInfoComponent extends ProductFeatureShared {}
