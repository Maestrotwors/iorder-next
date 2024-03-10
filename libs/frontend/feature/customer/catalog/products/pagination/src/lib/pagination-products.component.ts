import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
import { CatalogProductsStore } from '@iorder-next/frontend/core/customer/store/catalog/products';
import { PaginatorModule, PaginatorState } from 'primeng/paginator';

@Component({
  selector: 'io-customer-feature-catalog-products-catalog-pagination',
  standalone: true,
  imports: [CommonModule, PaginatorModule],
  templateUrl: './pagination-products.component.html',
  styleUrls: ['./pagination-products.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FrontendFeatureCustomerCatalogPaginationProductsComponent {
  readonly catalogProductsStore = inject(CatalogProductsStore);
  page = input('page');

  first = 50;
  rows = 10;

  onPageChange(event: PaginatorState): void {
    this.first = event.first || 0;
    this.rows = event.rows || 10;
  }
}
