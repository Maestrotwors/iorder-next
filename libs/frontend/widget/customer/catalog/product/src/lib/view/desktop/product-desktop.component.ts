import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  FrontendFeatureCustomerCatalogProductAdditionalInfoComponent,
  FrontendFeatureCustomerCatalogProductBackToProductsComponent,
  FrontendFeatureCustomerCatalogProductBreadCrumbsComponent,
  FrontendFeatureCustomerCatalogProductDescriptionComponent,
  FrontendFeatureCustomerCatalogProductOrderComponent,
  FrontendFeatureCustomerCatalogProductPhotosViewComponent,
  FrontendFeatureCustomerCatalogProductTitleComponent,
} from '@io/frontend/feature/customer/catalog/product';

@Component({
  standalone: true,
  imports: [
    FrontendFeatureCustomerCatalogProductAdditionalInfoComponent,
    FrontendFeatureCustomerCatalogProductPhotosViewComponent,
    FrontendFeatureCustomerCatalogProductBreadCrumbsComponent,
    FrontendFeatureCustomerCatalogProductOrderComponent,
    FrontendFeatureCustomerCatalogProductDescriptionComponent,
    FrontendFeatureCustomerCatalogProductBackToProductsComponent,
    FrontendFeatureCustomerCatalogProductTitleComponent,
  ],
  selector: 'io-customer-widget-catalog-product-desktop',
  templateUrl: './product-desktop.component.html',
  styleUrl: './product-desktop.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FrontendWidgetCustomerCatalogProductDesktopComponent {}
