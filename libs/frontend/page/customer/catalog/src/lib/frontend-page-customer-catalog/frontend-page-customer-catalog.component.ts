import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { BreakPointService } from '@iorder-next/frontend/core/shared/break-point';
import { toSignal } from '@angular/core/rxjs-interop';
import { AsyncPipe } from '@angular/common';
import { FrontendPageCustomerCatalogDesktopComponent } from './view/desktop/frontend-page-customer-catalog-desktop.component';
import { FrontendPageCustomerCatalogMobileComponent } from './view/mobile/frontend-page-customer-catalog-mobile.component';

@Component({
    selector: 'io-customer-page-catalog',
    standalone: true,
    imports: [FrontendPageCustomerCatalogDesktopComponent, FrontendPageCustomerCatalogMobileComponent, AsyncPipe],
    templateUrl: './frontend-page-customer-catalog.component.html',
    styleUrl: './frontend-page-customer-catalog.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FrontendPageCustomerCatalogComponent {
    #breakPointService = inject(BreakPointService);

    public $isDesktop = toSignal(this.#breakPointService.isDesktop$);
    public isDesktop$ = this.#breakPointService.isDesktop$;
}
