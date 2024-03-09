import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'iorder-next-customer-page-order',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './frontend-page-customer-order.component.html',
  styleUrl: './frontend-page-customer-order.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FrontendPageCustomerOrderComponent {}
