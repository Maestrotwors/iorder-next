import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'iorder-next-customer-header',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './customer-header.component.html',
  styleUrl: './customer-header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FrontendCustomerHeaderComponent {}
