import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'io-customer-feature-profile-templates',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './frontend-feature-customer-profile-templates.component.html',
  styleUrl: './frontend-feature-customer-profile-templates.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FrontendFeatureCustomerProfileTemplatesComponent {}
