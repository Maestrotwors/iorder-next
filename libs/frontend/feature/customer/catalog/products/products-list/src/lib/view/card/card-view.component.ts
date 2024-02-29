import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardProductItemComponent } from './components/product-item/product-item.component';

@Component({
  selector: 'io-customer-feature-catalog-products-list-card-view',
  standalone: true,
  imports: [
    CommonModule,
    CardProductItemComponent
  ],
  templateUrl: './card-view.component.html',
  styleUrl: './card-view.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FrontendFeatureCustomerCatalogProductsListCardViewComponent {
  products = [
    { id: 1, name: 'iPhone XR', price: '850', image: 'https://prodasnovastacc.blob.core.windows.net/product-small-images1/3/5413149314092.jpg?' },
    { id: 2, name: 'iPhone 11', price: '999', image: 'https://prodasnovastacc.blob.core.windows.net/product-small-images/3/8006540535240.jpg?' },
    { id: 3, name: 'Samsung S20', price: '1349', image: 'https://prodasnovastacc.blob.core.windows.net/product-small-images/3/8006540512180.jpg' }
  ];
}
