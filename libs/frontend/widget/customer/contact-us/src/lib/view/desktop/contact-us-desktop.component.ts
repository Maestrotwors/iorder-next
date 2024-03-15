import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FrontendSharedCustomerFooterDesktopComponent } from '@io/frontend/core/customer/components/shared-customer/footer';
import {
  FrontendCustomerHeaderComponent,
  FrontendCustomerSubHeaderComponent,
} from '@io/frontend/core/customer/components/shared-customer/header';
import { ButtonsContainerComponent, ContactFormComponent, ContactsComponent } from '@io/frontend/feature/customer/contact-us';

@Component({
  selector: 'io-customer-widget-contact-us-desktop',
  standalone: true,
  imports: [
    FrontendSharedCustomerFooterDesktopComponent,
    RouterOutlet,
    FrontendCustomerHeaderComponent,
    FrontendCustomerSubHeaderComponent,
    CommonModule,
    ContactFormComponent,
    ButtonsContainerComponent,
    ContactsComponent,
  ],
  templateUrl: './contact-us-desktop.component.html',
  styleUrl: './contact-us-desktop.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FrontendWidgetCustomerContactUsDesktopComponent {}
