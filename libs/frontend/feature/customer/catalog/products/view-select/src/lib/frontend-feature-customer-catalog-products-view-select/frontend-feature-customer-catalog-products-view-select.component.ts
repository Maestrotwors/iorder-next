import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'io-customer-feature-catalog/products-view-select',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './frontend-feature-customer-catalog-products-view-select.component.html',
  styleUrl: './frontend-feature-customer-catalog-products-view-select.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FrontendFeatureCustomerCatalogProductsViewSelectComponent {}
