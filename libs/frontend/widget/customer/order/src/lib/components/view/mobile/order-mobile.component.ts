import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FrontendSharedCustomerFooterMobileComponent } from '@iorder-next/frontend/core/customer/components/shared-customer/footer';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'io-customer-widget-order-mobile',
  standalone: true,
  imports: [FrontendSharedCustomerFooterMobileComponent, RouterOutlet],
  templateUrl: './order-mobile.component.html',
  styleUrl: './order-mobile.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FrontendWidgetCustomerOrderMobileComponent {}
