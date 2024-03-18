import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IfNotDesktopDirective, IfDesktopDirective } from '@io/frontend/core/shared/directives/break-point';
import { WidgetDesktopProfileComponent, WidgetMobileProfileComponent } from '@io/frontend/widget/customer/profile';

@Component({
  selector: 'io-customer-page-profile',
  standalone: true,
  imports: [CommonModule, WidgetDesktopProfileComponent, WidgetMobileProfileComponent, IfNotDesktopDirective, IfDesktopDirective],
  templateUrl: './frontend-page-customer-profile.component.html',
  styleUrl: './frontend-page-customer-profile.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FrontendPageCustomerProfileComponent {}
