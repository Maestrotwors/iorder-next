import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'io-customer-page-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './frontend-page-customer-profile.component.html',
  styleUrl: './frontend-page-customer-profile.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FrontendPageCustomerProfileComponent {}
