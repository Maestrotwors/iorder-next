import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FrontendSharedCustomerFooterMobileComponent } from '@iorder-next/frontend/core/customer/components/shared-customer/footer';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'io-customer-page-catalog-mobile',
  standalone: true,
  imports: [FrontendSharedCustomerFooterMobileComponent, RouterOutlet],
  templateUrl: './frontend-page-customer-catalog-mobile.component.html',
  styleUrl: './frontend-page-customer-catalog-mobile.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FrontendPageCustomerCatalogMobileComponent {}
