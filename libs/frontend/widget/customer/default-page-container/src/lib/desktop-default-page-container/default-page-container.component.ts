import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FrontendCustomerHeaderComponent,
  FrontendCustomerSubHeaderComponent,
} from '@io/frontend/core/customer/components/shared-customer/header';
import { FrontendSharedCustomerFooterDesktopComponent } from '@io/frontend/core/customer/components/shared-customer/footer';

@Component({
  selector: 'io-customer-widget-desktop-default-page-container',
  standalone: true,
  imports: [
    CommonModule,
    FrontendCustomerHeaderComponent,
    FrontendCustomerSubHeaderComponent,
    FrontendSharedCustomerFooterDesktopComponent,
  ],
  templateUrl: './default-page-container.component.html',
  styleUrl: './default-page-container.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FrontendWidgetCustomerDesktopDefaultPageContainerComponent {}
