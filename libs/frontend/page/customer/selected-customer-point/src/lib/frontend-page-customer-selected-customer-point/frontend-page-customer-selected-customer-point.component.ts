import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'io-customer-page-selected-customer-point',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './frontend-page-customer-selected-customer-point.component.html',
  styleUrl: './frontend-page-customer-selected-customer-point.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FrontendPageCustomerSelectedCustomerPointComponent {
  constructor() {
    alert('comp SelectedCustomerPoint');
  }
}
