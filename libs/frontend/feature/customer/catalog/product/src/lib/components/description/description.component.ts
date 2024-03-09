import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ProductFeatureShared } from '../../shared/product-feature.shared';

@Component({
  standalone: true,
  imports: [],
  selector: 'iorder-next-customer-feature-catalog-product-description',
  template: `iorder-next-customer-feature-catalog-product-description`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FrontendFeatureCustomerCatalogProductDescriptionComponent extends ProductFeatureShared {}
