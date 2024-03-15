import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  CatalogProductsFilterComponent,
  CatalogProductsOrderUnitsComponent,
  CatalogProductsViewSelectComponent,
} from '@io/frontend/feature/customer/catalog/products/header-products-info';

@Component({
  selector: 'io-customer-widget-catalog-products-header',
  standalone: true,
  imports: [CommonModule, CatalogProductsViewSelectComponent, CatalogProductsFilterComponent, CatalogProductsOrderUnitsComponent],
  templateUrl: './frontend-widget-customer-catalog-products-header.component.html',
  styleUrl: './frontend-widget-customer-catalog-products-header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FrontendWidgetCustomerCatalogProductsHeaderComponent {}
