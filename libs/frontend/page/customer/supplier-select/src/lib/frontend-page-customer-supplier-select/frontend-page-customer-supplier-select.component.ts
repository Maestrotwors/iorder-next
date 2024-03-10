import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrontendCustomerHeaderComponent } from '@iorder-next/frontend/core/customer/components/shared-customer/header';

@Component({
  selector: 'io-customer-page-supplier-select',
  standalone: true,
  imports: [CommonModule, FrontendCustomerHeaderComponent],
  templateUrl: './frontend-page-customer-supplier-select.component.html',
  styleUrl: './frontend-page-customer-supplier-select.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FrontendPageCustomerSupplierSelectComponent {}
