import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FrontendSharedCustomerFooterMobileComponent } from '@iorder-next/frontend/shared/customer/footer';

@Component({
  selector: 'io-customer-page-catalog-mobile',
  standalone: true,
  imports: [FrontendSharedCustomerFooterMobileComponent],
  templateUrl: './frontend-page-customer-catalog-mobile.component.html',
  styleUrl: './frontend-page-customer-catalog-mobile.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FrontendPageCustomerCatalogMobileComponent {}
