import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IfDesktopDirective, IfNotDesktopDirective } from '@io/frontend/core/shared/directives/break-point';
import {
  FrontendWidgetCustomerDesktopDefaultPageContainerComponent,
  FrontendWidgetCustomerMobileDefaultPageContainerComponent,
} from '@io/frontend/widget/customer/default-page-container';

@Component({
  selector: 'io-customer-page-rules',
  standalone: true,
  imports: [
    CommonModule,
    IfNotDesktopDirective,
    IfDesktopDirective,
    FrontendWidgetCustomerDesktopDefaultPageContainerComponent,
    FrontendWidgetCustomerMobileDefaultPageContainerComponent,
  ],
  templateUrl: './frontend-page-customer-rules.component.html',
  styleUrl: './frontend-page-customer-rules.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FrontendPageCustomerRulesComponent {}
