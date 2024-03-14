import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IfDesktopDirective, IfNotDesktopDirective } from '@iorder-next/frontend/core/shared/directives/break-point';
import {
  FrontendWidgetCustomerContactUsDesktopComponent,
  FrontendWidgetCustomerContactUsMobileComponent,
} from '@iorder-next/frontend/widget/customer/contact-us';

@Component({
  selector: 'io-customer-page-contact-us',
  standalone: true,
  imports: [
    CommonModule,
    IfNotDesktopDirective,
    IfDesktopDirective,
    FrontendWidgetCustomerContactUsDesktopComponent,
    FrontendWidgetCustomerContactUsMobileComponent,
  ],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FrontendPageCustomerContactUsComponent {}
