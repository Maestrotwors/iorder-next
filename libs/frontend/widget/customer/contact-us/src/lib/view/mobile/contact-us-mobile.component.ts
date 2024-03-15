import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FrontendSharedCustomerFooterMobileComponent } from '@io/frontend/core/customer/components/shared-customer/footer';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'io-customer-widget-contact-us-mobile',
  standalone: true,
  imports: [FrontendSharedCustomerFooterMobileComponent, RouterOutlet],
  templateUrl: './contact-us-mobile.component.html',
  styleUrl: './contact-us-mobile.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FrontendWidgetCustomerContactUsMobileComponent {}
