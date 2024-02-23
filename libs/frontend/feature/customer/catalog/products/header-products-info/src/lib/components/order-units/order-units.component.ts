import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'io-catalog-products-order-units',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './order-units.component.html',
  styleUrl: './order-units.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CatalogProductsOrderUnitsComponent {}
