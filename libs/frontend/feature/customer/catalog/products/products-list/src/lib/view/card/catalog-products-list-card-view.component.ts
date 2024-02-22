import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'io-customer-feature-catalog-products-list-card-view',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './catalog-products-list-card-view.component.html',
    styleUrl: './catalog-products-list-card-view.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FrontendFeatureCustomerCatalogProductsListCardViewComponent {}
