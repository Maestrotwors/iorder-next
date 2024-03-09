import { ChangeDetectionStrategy, Component, OnInit, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogProductStore } from '@iorder-next/frontend/core/customer/store/catalog/product';
import {
  FrontendWidgetCustomerCatalogProductDesktopComponent,
  FrontendWidgetCustomerCatalogProductMobileComponent,
} from '@iorder-next/frontend/widget/customer/catalog/product';
import { IfMobileDirective, IfNotMobileDirective } from '@iorder-next/frontend/core/shared/directives/break-point';

@Component({
  selector: 'iorder-next-customer-page-product',
  standalone: true,
  imports: [
    CommonModule,
    FrontendWidgetCustomerCatalogProductDesktopComponent,
    FrontendWidgetCustomerCatalogProductMobileComponent,
    IfMobileDirective,
    IfNotMobileDirective,
  ],
  templateUrl: './frontend-page-customer-product.component.html',
  styleUrl: './frontend-page-customer-product.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FrontendPageCustomerProductComponent implements OnInit {
  #catalogProductStore = inject(CatalogProductStore);

  @Input() productId = '0';

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
