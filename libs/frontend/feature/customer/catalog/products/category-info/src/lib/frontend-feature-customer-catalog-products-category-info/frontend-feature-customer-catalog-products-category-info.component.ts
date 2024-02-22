import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'io-customer-feature-catalog/products-category-info',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './frontend-feature-customer-catalog-products-category-info.component.html',
  styleUrl: './frontend-feature-customer-catalog-products-category-info.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FrontendFeatureCustomerCatalogProductsCategoryInfoComponent {}
