import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'io-customer-feature-profile-orders',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './frontend-feature-customer-profile-orders.component.html',
  styleUrl: './frontend-feature-customer-profile-orders.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FrontendFeatureCustomerProfileOrdersComponent {}
