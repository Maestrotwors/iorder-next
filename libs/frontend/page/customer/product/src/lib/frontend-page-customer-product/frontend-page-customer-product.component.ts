import { ChangeDetectionStrategy, Component, OnInit, inject, input } from '@angular/core';
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
  #productId = input('productId');

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    const productId = +this.#productId();
    this.#catalogProductStore.loadProduct(productId);
  }
}
