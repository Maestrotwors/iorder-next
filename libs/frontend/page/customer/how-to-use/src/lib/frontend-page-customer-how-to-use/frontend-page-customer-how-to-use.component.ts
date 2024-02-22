import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'io-customer-page-howToUse',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './frontend-page-customer-how-to-use.component.html',
  styleUrl: './frontend-page-customer-how-to-use.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FrontendPageCustomerHowToUseComponent {}
