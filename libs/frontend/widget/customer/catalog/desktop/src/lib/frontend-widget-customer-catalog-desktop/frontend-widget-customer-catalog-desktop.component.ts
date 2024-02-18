import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'io-customer-widget-catalog-desktop',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './frontend-widget-customer-catalog-desktop.component.html',
    styleUrl: './frontend-widget-customer-catalog-desktop.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FrontendWidgetCustomerCatalogDesktopComponent {}
