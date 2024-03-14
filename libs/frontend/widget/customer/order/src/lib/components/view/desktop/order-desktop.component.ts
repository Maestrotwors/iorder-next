import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FrontendSharedCustomerFooterDesktopComponent } from '@iorder-next/frontend/core/customer/components/shared-customer/footer';
import {
  FrontendCustomerHeaderComponent,
  FrontendCustomerSubHeaderComponent,
} from '@iorder-next/frontend/core/customer/components/shared-customer/header';
import { OrderFooterComponent, OrderHeaderComponent, OrderTableComponent } from '@iorder-next/frontend/feature/customer/order/order-info';
import { FrontendFeatureCustomerOrderSubSuppliersNavigationComponent } from '@iorder-next/frontend/feature/customer/order/suppliers-navigation';

@Component({
  selector: 'io-customer-widget-order-desktop',
  standalone: true,
  imports: [
    FrontendSharedCustomerFooterDesktopComponent,
    RouterOutlet,
    FrontendCustomerHeaderComponent,
    FrontendFeatureCustomerOrderSubSuppliersNavigationComponent,
    FrontendCustomerSubHeaderComponent,
    OrderHeaderComponent,
    OrderFooterComponent,
    OrderTableComponent,
    CommonModule,
  ],
  templateUrl: './order-desktop.component.html',
  styleUrl: './order-desktop.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FrontendWidgetCustomerOrderDesktopComponent {}
