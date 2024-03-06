import { ChangeDetectionStrategy, Component, OnInit, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogProductStore } from '@iorder-next/frontend/core/customer/store/catalog/product';

@Component({
  selector: 'io-customer-page-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './frontend-page-customer-product.component.html',
  styleUrl: './frontend-page-customer-product.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FrontendPageCustomerProductComponent implements OnInit {
  #catalogProductStore = inject(CatalogProductStore);
  @Input()
  productId: string = '0';

  ngOnInit(): void {
    this.loadData();
  }

  private loadData(): void {
    this.#catalogProductStore.loadProduct(+this.productId);
  }

  navigateToCatalog() {
    this.#catalogProductStore.navigateToCatalog();
  }
}
