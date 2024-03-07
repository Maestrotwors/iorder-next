import { Directive, inject } from "@angular/core";
import { CatalogProductStore, Product } from "@iorder-next/frontend/core/customer/store/catalog/product";

@Directive({
  standalone: true
})
export class ProductFeatureShared {
  protected readonly catalogProductStore = inject(CatalogProductStore);
  protected currentProduct = this.catalogProductStore.product;
}
