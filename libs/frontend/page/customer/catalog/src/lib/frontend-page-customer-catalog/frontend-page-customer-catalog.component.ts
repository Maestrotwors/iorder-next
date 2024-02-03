import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'io-customer-page-catalog',
  standalone: true,
  imports: [],
  templateUrl: './frontend-page-customer-catalog.component.html',
  styleUrl: './frontend-page-customer-catalog.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FrontendPageCustomerCatalogComponent {}
