import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IfDesktopDirective, IfNotDesktopDirective } from '@io/frontend/core/shared/directives/break-point';
import {
  FrontendWidgetCustomerDesktopDefaultPageContainerComponent,
  FrontendWidgetCustomerMobileDefaultPageContainerComponent,
} from '@io/frontend/widget/customer/default-page-container';
import { FrontendFeatureCustomerRefundComponent } from '@io/frontend/feature/customer/refund';

@Component({
  selector: 'io-customer-page-refund',
  standalone: true,
  imports: [
    CommonModule,
    IfNotDesktopDirective,
    IfDesktopDirective,
    FrontendWidgetCustomerDesktopDefaultPageContainerComponent,
    FrontendWidgetCustomerMobileDefaultPageContainerComponent,
    FrontendFeatureCustomerRefundComponent,
  ],
  templateUrl: './frontend-page-customer-refund.component.html',
  styleUrl: './frontend-page-customer-refund.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FrontendPageCustomerRefundComponent {}
