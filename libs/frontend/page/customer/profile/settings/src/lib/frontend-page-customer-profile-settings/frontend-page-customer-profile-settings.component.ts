import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'io-customer-page-profile-settings',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './frontend-page-customer-profile-settings.component.html',
  styleUrl: './frontend-page-customer-profile-settings.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FrontendPageCustomerProfileSettingsComponent {}
