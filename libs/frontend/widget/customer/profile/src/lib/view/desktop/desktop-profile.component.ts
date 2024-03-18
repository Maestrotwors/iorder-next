import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrontendSharedCustomerFooterDesktopComponent } from '@io/frontend/core/customer/components/shared-customer/footer';
import {
  FrontendCustomerHeaderComponent,
  FrontendCustomerSubHeaderComponent,
} from '@io/frontend/core/customer/components/shared-customer/header';
import { RouterOutlet } from '@angular/router';
import { FeatureProfileNavigationComponent } from '@io/frontend/feature/customer/profile/navigation';

@Component({
  selector: 'io-widget-desktop-profile',
  standalone: true,
  imports: [
    FrontendSharedCustomerFooterDesktopComponent,
    RouterOutlet,
    FrontendCustomerHeaderComponent,
    FrontendCustomerSubHeaderComponent,
    CommonModule,
    FeatureProfileNavigationComponent,
  ],
  templateUrl: './desktop-profile.component.html',
  styleUrl: './desktop-profile.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WidgetDesktopProfileComponent {}
