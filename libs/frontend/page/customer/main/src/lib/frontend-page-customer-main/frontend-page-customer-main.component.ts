import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CatalogProductsViewStore } from '@iorder-next/frontend/core/customer/store/catalog/products';
@Component({
  selector: 'io-customer-page-main',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './frontend-page-customer-main.component.html',
  styleUrl: './frontend-page-customer-main.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    CatalogProductsViewStore
  ]
})
export class FrontendPageCustomerMainComponent {}
