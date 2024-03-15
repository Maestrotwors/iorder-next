import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FrontendWidgetCustomerCatalogProductsHeaderComponent } from '@io/frontend/widget/customer/catalog/products-header';
import { FrontendWidgetCustomerCatalogProductsListComponent } from '@io/frontend/widget/customer/catalog/products-list';

@Component({
  selector: 'io-customer-page-products',
  standalone: true,
  imports: [FrontendWidgetCustomerCatalogProductsHeaderComponent, FrontendWidgetCustomerCatalogProductsListComponent],
  templateUrl: './frontend-page-customer-products.component.html',
  styleUrl: './frontend-page-customer-products.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FrontendPageCustomerProductsComponent {}
