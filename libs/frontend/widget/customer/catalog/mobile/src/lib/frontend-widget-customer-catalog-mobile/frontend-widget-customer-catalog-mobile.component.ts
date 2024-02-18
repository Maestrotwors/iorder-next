import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'io-customer-widget-catalog-mobile',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './frontend-widget-customer-catalog-mobile.component.html',
    styleUrl: './frontend-widget-customer-catalog-mobile.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FrontendWidgetCustomerCatalogMobileComponent {}
