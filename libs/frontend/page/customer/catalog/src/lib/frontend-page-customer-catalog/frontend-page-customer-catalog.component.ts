import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { FrontendPageCustomerCatalogDesktopComponent } from './view/desktop/frontend-page-customer-catalog-desktop.component';
import { FrontendPageCustomerCatalogMobileComponent } from './view/mobile/frontend-page-customer-catalog-mobile.component';
import { IfDesktopDirective, IfNotDesktopDirective } from '@iorder-next/frontend/shared/shared/directives/break-point-directives';
import { CatalogProductsStore } from '@iorder-next/frontend/repository/customer/catalog/products';

@Component({
  selector: 'io-customer-page-catalog',
  standalone: true,
  imports: [
    FrontendPageCustomerCatalogDesktopComponent,
    FrontendPageCustomerCatalogMobileComponent,
    AsyncPipe,
    IfNotDesktopDirective,
    IfDesktopDirective
  ],
  templateUrl: './frontend-page-customer-catalog.component.html',
  styleUrl: './frontend-page-customer-catalog.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [ CatalogProductsStore ],
})
export class FrontendPageCustomerCatalogComponent implements  OnInit {
  readonly catalogProductsStore = inject(CatalogProductsStore);

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts() {
    this.catalogProductsStore.loadProducts();
  }
}
