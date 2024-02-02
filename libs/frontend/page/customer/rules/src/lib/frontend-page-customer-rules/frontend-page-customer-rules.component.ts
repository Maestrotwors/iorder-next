import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'io-customer-page-rules',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './frontend-page-customer-rules.component.html',
  styleUrl: './frontend-page-customer-rules.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FrontendPageCustomerRulesComponent {}
