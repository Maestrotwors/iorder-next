import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'io-customer-sub-header',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './customer-sub-header.component.html',
  styleUrl: './customer-sub-header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FrontendCustomerSubHeaderComponent {}
