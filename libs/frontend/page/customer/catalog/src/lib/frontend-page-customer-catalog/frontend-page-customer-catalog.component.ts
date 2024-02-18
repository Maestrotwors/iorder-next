import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { BreakPointService } from '@iorder-next/frontend/core/shared/break-point';
import { FrontendWidgetCustomerCatalogDesktopComponent } from '@iorder-next/frontend/widget/customer/catalog/desktop';
import { FrontendWidgetCustomerCatalogMobileComponent } from '@iorder-next/frontend/widget/customer/catalog/mobile';
import { toSignal } from '@angular/core/rxjs-interop';
import { AsyncPipe } from '@angular/common';

@Component({
    selector: 'io-customer-page-catalog',
    standalone: true,
    imports: [FrontendWidgetCustomerCatalogDesktopComponent, FrontendWidgetCustomerCatalogMobileComponent, AsyncPipe],
    templateUrl: './frontend-page-customer-catalog.component.html',
    styleUrl: './frontend-page-customer-catalog.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FrontendPageCustomerCatalogComponent {
    #breakPointService = inject(BreakPointService);

    public $isDesktop = toSignal(this.#breakPointService.isDesktop$);
    public isDesktop$ = this.#breakPointService.isDesktop$;
}
