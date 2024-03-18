import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'io-customer-feature-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './frontend-feature-customer-profile.component.html',
  styleUrl: './frontend-feature-customer-profile.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FrontendFeatureCustomerProfileComponent {}
