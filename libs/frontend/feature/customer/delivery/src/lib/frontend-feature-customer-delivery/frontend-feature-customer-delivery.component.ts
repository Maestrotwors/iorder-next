import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'io-customer-feature-delivery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './frontend-feature-customer-delivery.component.html',
  styleUrl: './frontend-feature-customer-delivery.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FrontendFeatureCustomerDeliveryComponent {}
