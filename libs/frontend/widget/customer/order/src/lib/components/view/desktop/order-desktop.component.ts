import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FrontendSharedCustomerFooterDesktopComponent } from '@io/frontend/core/customer/components/shared-customer/footer';
import {
  FrontendCustomerHeaderComponent,
  FrontendCustomerSubHeaderComponent,
} from '@io/frontend/core/customer/components/shared-customer/header';
import { OrderFooterComponent, OrderHeaderComponent, OrderTableComponent } from '@io/frontend/feature/customer/order/order-info';
import { FrontendFeatureCustomerOrderSubSuppliersNavigationComponent } from '@io/frontend/feature/customer/order/suppliers-navigation';
import { MenuContentComponent, MenuTriggerDirective } from '@io/frontend/ui/menu';
import { LucideAngularModule } from 'lucide-angular';

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
    MenuTriggerDirective,
    MenuContentComponent,
    LucideAngularModule,
  ],
  templateUrl: './order-desktop.component.html',
  styleUrl: './order-desktop.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FrontendWidgetCustomerOrderDesktopComponent {}
