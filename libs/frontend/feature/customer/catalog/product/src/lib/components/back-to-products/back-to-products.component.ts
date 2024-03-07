import { ChangeDetectionStrategy, Component } from "@angular/core";
import { ProductFeatureShared } from "../../shared/product-feature.shared";
import { ButtonModule } from 'primeng/button';
import { CommonModule } from "@angular/common";

@Component({
  standalone: true,
  imports: [ ButtonModule, CommonModule ],
  selector: 'io-customer-feature-catalog-product-back-to-products',
  template: `
    <span>
      <p-button icon="pi pi-arrow-left" [outlined]="true" (click)="goToCatalogProducts()"></p-button>
    </span>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FrontendFeatureCustomerCatalogProductBackToProductsComponent extends ProductFeatureShared {
  goToCatalogProducts(): void {
    this.catalogProductStore.navigateToCatalog();
  }
}
