import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImgLoaderDirective } from '@iorder-next/frontend/core/shared/directives/image-loader';
import { Product } from '@iorder-next/frontend/core/customer/store/catalog/product';

@Component({
  selector: 'iorder-next-card-product-item',
  standalone: true,
  imports: [CommonModule, ImgLoaderDirective],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardProductItemComponent {
  product = input.required<Product>();
}
