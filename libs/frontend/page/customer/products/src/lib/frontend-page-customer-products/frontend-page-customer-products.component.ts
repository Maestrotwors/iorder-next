import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { CustomerProductsService } from '@iorder-next/frontend/shared/customer/catalog';
import { FrontendWidgetCustomerCatalogProductsHeaderComponent } from '@iorder-next/frontend/widget/customer/catalog/products-header';
import { FrontendWidgetCustomerCatalogProductsListComponent } from '@iorder-next/frontend/widget/customer/catalog/products-list';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'io-customer-page-products',
  standalone: true,
  imports: [FrontendWidgetCustomerCatalogProductsHeaderComponent, FrontendWidgetCustomerCatalogProductsListComponent],
  templateUrl: './frontend-page-customer-products.component.html',
  styleUrl: './frontend-page-customer-products.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FrontendPageCustomerProductsComponent {
  #productsService = inject(CustomerProductsService);

  constructor() {
    this.getProducts();
  }

  async getProducts() {
    await firstValueFrom(this.#productsService.getProducts().pipe(takeUntilDestroyed()));
  }
}
