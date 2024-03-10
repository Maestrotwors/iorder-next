import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'io-customer-page-delivery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './frontend-page-customer-delivery.component.html',
  styleUrl: './frontend-page-customer-delivery.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FrontendPageCustomerDeliveryComponent {}
