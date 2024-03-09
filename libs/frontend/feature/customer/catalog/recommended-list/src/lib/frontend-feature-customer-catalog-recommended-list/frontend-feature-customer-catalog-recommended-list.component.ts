import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'iorder-next-customer-feature-catalog-recommended-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './frontend-feature-customer-catalog-recommended-list.component.html',
  styleUrl: './frontend-feature-customer-catalog-recommended-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FrontendFeatureCustomerCatalogRecommendedListComponent {}
