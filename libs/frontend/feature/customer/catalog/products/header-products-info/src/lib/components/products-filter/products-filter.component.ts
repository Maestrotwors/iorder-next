import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'io-catalog-products-filter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products-filter.component.html',
  styleUrl: './products-filter.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CatalogProductsFilterComponent {}
