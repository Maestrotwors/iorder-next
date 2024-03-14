import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'io-customer-feature-how-to-use',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './frontend-feature-customer-how-to-use.component.html',
  styleUrl: './frontend-feature-customer-how-to-use.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FrontendFeatureCustomerHowToUseComponent {}
