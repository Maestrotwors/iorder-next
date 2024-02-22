import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'io-customer-feature-catalog/products-order-units-select',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './frontend-feature-customer-catalog-products-order-units-select.component.html',
    styleUrl: './frontend-feature-customer-catalog-products-order-units-select.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FrontendFeatureCustomerCatalogProductsOrderUnitsSelectComponent {}
