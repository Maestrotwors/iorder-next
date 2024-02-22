import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'io-customer-widget-catalog-products-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './frontend-widget-customer-catalog-products-header.component.html',
  styleUrl: './frontend-widget-customer-catalog-products-header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FrontendWidgetCustomerCatalogProductsHeaderComponent {}
