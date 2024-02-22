import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { FrontendPageCustomerCatalogDesktopComponent } from './view/desktop/frontend-page-customer-catalog-desktop.component';
import { FrontendPageCustomerCatalogMobileComponent } from './view/mobile/frontend-page-customer-catalog-mobile.component';
import { IfDesktopDirective, IfNotDesktopDirective } from '@iorder-next/frontend/shared/shared/directives/break-point-directives';

@Component({
  selector: 'io-customer-page-catalog',
  standalone: true,
  imports: [
    FrontendPageCustomerCatalogDesktopComponent,
    FrontendPageCustomerCatalogMobileComponent,
    AsyncPipe,
    IfNotDesktopDirective,
    IfDesktopDirective
  ],
  templateUrl: './frontend-page-customer-catalog.component.html',
  styleUrl: './frontend-page-customer-catalog.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FrontendPageCustomerCatalogComponent {}
