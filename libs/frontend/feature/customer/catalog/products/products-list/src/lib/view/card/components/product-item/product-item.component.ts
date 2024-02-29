import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgOptimizedImage } from '@angular/common'
import { ImageLoaderDirective } from '@iorder-next/frontend/shared/shared/directives/break-point-directives';

@Component({
  selector: 'io-card-product-item',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, ImageLoaderDirective],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardProductItemComponent {
  product = input.required<any>();
}
