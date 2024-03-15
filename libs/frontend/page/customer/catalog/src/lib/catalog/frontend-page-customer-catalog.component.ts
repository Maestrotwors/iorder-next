import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrontendPageCustomerCatalogDesktopComponent } from './view/desktop/frontend-page-customer-catalog-desktop.component';
import { FrontendPageCustomerCatalogMobileComponent } from './view/mobile/frontend-page-customer-catalog-mobile.component';
import { CatalogProductsStore, CatalogProductsViewStore } from '@io/frontend/core/customer/store/catalog/products';
import { IfDesktopDirective, IfNotDesktopDirective } from '@io/frontend/core/shared/directives/break-point';
import { CatalogCategoriesStore } from '@io/frontend/core/customer/store/catalog/categories';
import { CatalogProductStore } from '@io/frontend/core/customer/store/catalog/product';

@Component({
  selector: 'io-customer-page-catalog',
  standalone: true,
  imports: [
    FrontendPageCustomerCatalogDesktopComponent,
    FrontendPageCustomerCatalogMobileComponent,
    IfNotDesktopDirective,
    IfDesktopDirective,
    CommonModule,
  ],
  templateUrl: './frontend-page-customer-catalog.component.html',
  styleUrl: './frontend-page-customer-catalog.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [CatalogProductsStore, CatalogCategoriesStore, CatalogProductsViewStore, CatalogProductStore],
})
export class FrontendPageCustomerCatalogComponent implements OnInit {
  readonly #catalogProductsStore = inject(CatalogProductsStore);
  readonly #catalogProductStore = inject(CatalogProductStore);
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
