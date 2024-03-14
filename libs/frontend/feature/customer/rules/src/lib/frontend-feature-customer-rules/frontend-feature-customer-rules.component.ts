import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'io-customer-feature-rules',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './frontend-feature-customer-rules.component.html',
  styleUrl: './frontend-feature-customer-rules.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FrontendFeatureCustomerRulesComponent {}
