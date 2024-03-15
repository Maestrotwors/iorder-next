import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IfDesktopDirective, IfNotDesktopDirective } from '@io/frontend/core/shared/directives/break-point';
import { WidgetDesktopSupplierSelectComponent, WidgetMobileSupplierSelectComponent } from '@io/frontend/widget/customer/supplier-select';

@Component({
  selector: 'io-customer-page-supplier-select',
  standalone: true,
  imports: [
    CommonModule,
    IfNotDesktopDirective,
    IfDesktopDirective,
    CommonModule,
    WidgetDesktopSupplierSelectComponent,
    WidgetMobileSupplierSelectComponent,
  ],
  templateUrl: './frontend-page-customer-supplier-select.component.html',
  styleUrl: './frontend-page-customer-supplier-select.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FrontendPageCustomerSupplierSelectComponent {}
