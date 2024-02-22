import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'io-customer-feature-catalog/products-filters',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './frontend-feature-customer-catalog-products-filters.component.html',
    styleUrl: './frontend-feature-customer-catalog-products-filters.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FrontendFeatureCustomerCatalogProductsFiltersComponent {}
