import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IfDesktopDirective, IfNotDesktopDirective } from '@io/frontend/core/shared/directives/break-point';
import {
  FrontendWidgetCustomerDesktopDefaultPageContainerComponent,
  FrontendWidgetCustomerMobileDefaultPageContainerComponent,
} from '@io/frontend/widget/customer/default-page-container';
import { FrontendFeatureCustomerDeliveryComponent } from '@io/frontend/feature/customer/delivery';

@Component({
  selector: 'io-customer-page-delivery',
  standalone: true,
  imports: [
    CommonModule,
    IfNotDesktopDirective,
    IfDesktopDirective,
    FrontendWidgetCustomerDesktopDefaultPageContainerComponent,
    FrontendWidgetCustomerMobileDefaultPageContainerComponent,
    FrontendFeatureCustomerDeliveryComponent,
  ],
  templateUrl: './frontend-page-customer-delivery.component.html',
  styleUrl: './frontend-page-customer-delivery.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FrontendPageCustomerDeliveryComponent {}
