import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'io-catalog-products-view-select',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './view-select.component.html',
  styleUrl: './view-select.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CatalogProductsViewSelectComponent {}
