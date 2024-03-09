import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ProductFeatureShared } from '../../shared/product-feature.shared';

@Component({
  standalone: true,
  imports: [],
  selector: 'iorder-next-customer-feature-catalog-product-photos-view',
  templateUrl: './photos-view.component.html',
  styleUrl: './photos-view.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FrontendFeatureCustomerCatalogProductPhotosViewComponent extends ProductFeatureShared {}
