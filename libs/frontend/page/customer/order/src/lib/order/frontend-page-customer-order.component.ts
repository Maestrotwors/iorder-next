import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IfDesktopDirective, IfNotDesktopDirective } from '@io/frontend/core/shared/directives/break-point';
import {
  FrontendWidgetCustomerOrderDesktopComponent,
  FrontendWidgetCustomerOrderMobileComponent,
} from '@io/frontend/widget/customer/order';

@Component({
  selector: 'io-customer-page-order',
  standalone: true,
  imports: [
    CommonModule,
    FrontendWidgetCustomerOrderDesktopComponent,
    FrontendWidgetCustomerOrderMobileComponent,
    IfNotDesktopDirective,
    IfDesktopDirective,
  ],
  templateUrl: './frontend-page-customer-order.component.html',
  styleUrl: './frontend-page-customer-order.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FrontendPageCustomerOrderComponent {}
