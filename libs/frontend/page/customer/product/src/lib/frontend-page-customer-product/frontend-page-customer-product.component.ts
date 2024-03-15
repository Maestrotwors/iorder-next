import { ChangeDetectionStrategy, Component, OnInit, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogProductStore } from '@io/frontend/core/customer/store/catalog/product';
import {
  FrontendWidgetCustomerCatalogProductDesktopComponent,
  FrontendWidgetCustomerCatalogProductMobileComponent,
} from '@io/frontend/widget/customer/catalog/product';
import { IfMobileDirective, IfNotMobileDirective } from '@io/frontend/core/shared/directives/break-point';

@Component({
  selector: 'io-customer-page-product',
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
