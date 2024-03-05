import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CatalogProductsViewStore, CatalogProductsViewType } from '@iorder-next/frontend/core/customer/store/catalog/products';
import { SelectButtonModule } from 'primeng/selectbutton';
@Component({
  selector: 'io-catalog-products-view-select',
  standalone: true,
  imports: [
    CommonModule,
    SelectButtonModule,
    FormsModule
  ],
  templateUrl: './view-select.component.html',
  styleUrl: './view-select.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CatalogProductsViewSelectComponent {
  readonly catalogProductsViewStore = inject(CatalogProductsViewStore);
  stateOptions = [{label: 'Card', value: 'card'}, {label: 'List', value: 'list'}];
  selectedSize = this.catalogProductsViewStore.productsViewType();

  selectView(view: CatalogProductsViewType) {
    this.catalogProductsViewStore.setProductsViewType(view);
  }
}
