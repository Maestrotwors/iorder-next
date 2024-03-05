import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FrontendSharedCustomerFooterDesktopComponent } from '@iorder-next/frontend/core/customer/components/shared-customer/footer';
import { FrontendWidgetCustomerCatalogDesktopNavMenuComponent } from '@iorder-next/frontend/widget/customer/catalog/desktop-nav-menu';

@Component({
  selector: 'io-customer-page-catalog-desktop',
  standalone: true,
  imports: [FrontendSharedCustomerFooterDesktopComponent, FrontendWidgetCustomerCatalogDesktopNavMenuComponent, RouterOutlet],
  templateUrl: './frontend-page-customer-catalog-desktop.component.html',
  styleUrl: './frontend-page-customer-catalog-desktop.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FrontendPageCustomerCatalogDesktopComponent {}
