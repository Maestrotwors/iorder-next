import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FrontendFeatureCustomerCatalogCategoriesListComponent } from '@io/frontend/feature/customer/catalog/categories-list';
import { FrontendFeatureCustomerCatalogRecommendedListComponent } from '@io/frontend/feature/customer/catalog/recommended-list';
import { FrontendFeatureCustomerCatalogSubSupplierSelectionComponent } from '@io/frontend/feature/customer/catalog/sub-supplier-selection';
import { FrontendFeatureCustomerCatalogSupplierListComponent } from '@io/frontend/feature/customer/catalog/supplier-list';
import { FrontendSharedCustomerSupplierBigIconComponent } from '@io/frontend/core/customer/components/shared-customer/supplier-icon';

@Component({
  selector: 'io-customer-widget-catalog-desktop-nav-menu',
  standalone: true,
  imports: [
    FrontendSharedCustomerSupplierBigIconComponent,
    FrontendFeatureCustomerCatalogSupplierListComponent,
    FrontendFeatureCustomerCatalogCategoriesListComponent,
    FrontendFeatureCustomerCatalogRecommendedListComponent,
    FrontendFeatureCustomerCatalogSubSupplierSelectionComponent,
  ],
  templateUrl: './frontend-widget-customer-catalog-desktop-nav-menu.component.html',
  styleUrl: './frontend-widget-customer-catalog-desktop-nav-menu.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FrontendWidgetCustomerCatalogDesktopNavMenuComponent {}
