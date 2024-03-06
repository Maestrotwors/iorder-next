import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { FrontendPageCustomerCatalogDesktopComponent } from './view/desktop/frontend-page-customer-catalog-desktop.component';
import { FrontendPageCustomerCatalogMobileComponent } from './view/mobile/frontend-page-customer-catalog-mobile.component';
import { CatalogProductsStore, CatalogProductsViewStore } from '@iorder-next/frontend/core/customer/store/catalog/products';
import { IfDesktopDirective, IfNotDesktopDirective } from '@iorder-next/frontend/core/shared/directives/break-point';
import { CatalogCategoriesStore } from '@iorder-next/frontend/core/customer/store/catalog/categories';
import { CatalogProductStore } from '@iorder-next/frontend/core/customer/store/catalog/product';

@Component({
  selector: 'io-customer-page-catalog',
  standalone: true,
  imports: [
    FrontendPageCustomerCatalogDesktopComponent,
    FrontendPageCustomerCatalogMobileComponent,
    AsyncPipe,
    IfNotDesktopDirective,
    IfDesktopDirective,
  ],
  templateUrl: './frontend-page-customer-catalog.component.html',
  styleUrl: './frontend-page-customer-catalog.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    CatalogProductsStore,
    CatalogProductStore,
    CatalogCategoriesStore,
  ],
})
export class FrontendPageCustomerCatalogComponent implements OnInit {
  readonly #catalogProductsStore = inject(CatalogProductsStore);
  readonly #catalogCategoriesStore = inject(CatalogCategoriesStore);
  readonly #catalogProductsViewStore = inject(CatalogProductsViewStore);

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.#catalogProductsStore.loadProducts();
    this.#catalogCategoriesStore.loadCategories();
    this.#catalogProductsViewStore.loadCatalogProductsViewType();
  }
}
