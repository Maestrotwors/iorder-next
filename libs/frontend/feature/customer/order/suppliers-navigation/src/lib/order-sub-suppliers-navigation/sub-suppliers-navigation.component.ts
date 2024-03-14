import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'io-customer-feature-order-sub-suppliers-navigation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sub-suppliers-navigation.component.html',
  styleUrl: './sub-suppliers-navigation.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FrontendFeatureCustomerOrderSubSuppliersNavigationComponent {}
