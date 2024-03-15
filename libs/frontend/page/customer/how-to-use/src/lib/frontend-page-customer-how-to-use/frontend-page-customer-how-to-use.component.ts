import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IfDesktopDirective, IfNotDesktopDirective } from '@io/frontend/core/shared/directives/break-point';
import {
  FrontendWidgetCustomerDesktopDefaultPageContainerComponent,
  FrontendWidgetCustomerMobileDefaultPageContainerComponent,
} from '@io/frontend/widget/customer/default-page-container';
import { FrontendFeatureCustomerHowToUseComponent } from '@io/frontend/feature/customer/how-to-use';

@Component({
  selector: 'io-customer-page-how-to-use',
  standalone: true,
  imports: [
    CommonModule,
    IfNotDesktopDirective,
    IfDesktopDirective,
    FrontendWidgetCustomerDesktopDefaultPageContainerComponent,
    FrontendWidgetCustomerMobileDefaultPageContainerComponent,
    FrontendFeatureCustomerHowToUseComponent,
  ],
  templateUrl: './frontend-page-customer-how-to-use.component.html',
  styleUrl: './frontend-page-customer-how-to-use.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FrontendPageCustomerHowToUseComponent {}
