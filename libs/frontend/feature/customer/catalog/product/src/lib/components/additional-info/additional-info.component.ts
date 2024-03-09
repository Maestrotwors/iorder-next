import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ProductFeatureShared } from '../../shared/product-feature.shared';

@Component({
  standalone: true,
  imports: [],
  selector: 'io-customer-feature-catalog-product-additional-info',
  template: `io-customer-feature-catalog-product-additional-info`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FrontendFeatureCustomerCatalogProductAdditionalInfoComponent extends ProductFeatureShared {}
