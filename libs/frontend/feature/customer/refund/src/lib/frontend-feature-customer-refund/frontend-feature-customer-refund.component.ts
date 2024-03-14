import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'io-customer-feature-refund',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './frontend-feature-customer-refund.component.html',
  styleUrl: './frontend-feature-customer-refund.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FrontendFeatureCustomerRefundComponent {}
