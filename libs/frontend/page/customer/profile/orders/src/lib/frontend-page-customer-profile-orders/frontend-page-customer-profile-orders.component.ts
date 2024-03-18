import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'io-customer-page-profile-orders',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './frontend-page-customer-profile-orders.component.html',
  styleUrl: './frontend-page-customer-profile-orders.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FrontendPageCustomerProfileOrdersComponent {}
