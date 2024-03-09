import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'iorder-next-customer-page-contactUs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './frontend-page-customer-contact-us.component.html',
  styleUrl: './frontend-page-customer-contact-us.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FrontendPageCustomerContactUsComponent {}
