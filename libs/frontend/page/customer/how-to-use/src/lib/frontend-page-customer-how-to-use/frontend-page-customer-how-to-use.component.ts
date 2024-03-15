import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IfDesktopDirective, IfNotDesktopDirective } from '@io/frontend/core/shared/directives/break-point';
import {
  FrontendCustomerHeaderComponent,
  FrontendCustomerSubHeaderComponent,
} from '@io/frontend/core/customer/components/shared-customer/header';
import { FrontendSharedCustomerFooterDesktopComponent } from '@io/frontend/core/customer/components/shared-customer/footer';

@Component({
  selector: 'io-customer-page-how-to-use',
  standalone: true,
  imports: [
    CommonModule,
    IfNotDesktopDirective,
    IfDesktopDirective,
    FrontendCustomerHeaderComponent,
    FrontendCustomerSubHeaderComponent,
    FrontendSharedCustomerFooterDesktopComponent,
  ],
  templateUrl: './frontend-page-customer-how-to-use.component.html',
  styleUrl: './frontend-page-customer-how-to-use.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FrontendPageCustomerHowToUseComponent {}
