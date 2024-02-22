import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'io-customer-page-supplier-select',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './frontend-page-customer-supplier-select.component.html',
  styleUrl: './frontend-page-customer-supplier-select.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FrontendPageCustomerSupplierSelectComponent {}
