import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'io-customer-feature-profile-settings',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './frontend-feature-customer-profile-settings.component.html',
  styleUrl: './frontend-feature-customer-profile-settings.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FrontendFeatureCustomerProfileSettingsComponent {}
