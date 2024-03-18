import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'io-customer-page-profile-templates',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './frontend-page-customer-profile-templates.component.html',
  styleUrl: './frontend-page-customer-profile-templates.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FrontendPageCustomerProfileTemplatesComponent {}
