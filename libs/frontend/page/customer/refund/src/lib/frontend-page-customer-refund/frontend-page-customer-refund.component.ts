import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'iorder-next-customer-page-refund',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './frontend-page-customer-refund.component.html',
  styleUrl: './frontend-page-customer-refund.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FrontendPageCustomerRefundComponent {}
