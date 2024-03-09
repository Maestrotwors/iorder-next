import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'io-customer-page-main',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './frontend-page-customer-main.component.html',
  styleUrl: './frontend-page-customer-main.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [],
})
export class FrontendPageCustomerMainComponent {}
