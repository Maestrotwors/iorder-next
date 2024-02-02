import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'io-customer-page-catalog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './frontend-page-customer-catalog.component.html',
  styleUrl: './frontend-page-customer-catalog.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FrontendPageCustomerCatalogComponent {}
