import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'io-customer-page-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './frontend-page-customer-product.component.html',
  styleUrl: './frontend-page-customer-product.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FrontendPageCustomerProductComponent {}
