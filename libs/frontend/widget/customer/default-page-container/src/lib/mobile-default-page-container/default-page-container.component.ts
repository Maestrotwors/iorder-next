import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'io-customer-widget-mobile-default-page-container',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './default-page-container.component.html',
  styleUrl: './default-page-container.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FrontendWidgetCustomerMobileDefaultPageContainerComponent {}
