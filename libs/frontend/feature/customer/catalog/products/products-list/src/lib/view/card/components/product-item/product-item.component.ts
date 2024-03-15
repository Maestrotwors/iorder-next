import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImgLoaderDirective } from '@io/frontend/core/shared/directives/image-loader';
import { Product } from '@io/frontend/core/customer/store/catalog/product';

@Component({
  selector: 'io-card-product-item',
  standalone: true,
  imports: [CommonModule, ImgLoaderDirective],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardProductItemComponent {
  product = input.required<Product>();
}
