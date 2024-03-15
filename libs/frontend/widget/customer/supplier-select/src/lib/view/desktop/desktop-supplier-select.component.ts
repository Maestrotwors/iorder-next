import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FrontendCustomerHeaderComponent,
  FrontendCustomerSubHeaderComponent,
} from '@io/frontend/core/customer/components/shared-customer/header';
import { FrontendSharedCustomerFooterDesktopComponent } from '@io/frontend/core/customer/components/shared-customer/footer';
import {
  ContractsHeaderComponent,
  ContractsSignedComponent,
  ContractsUnsignedComponent,
  DeliveryPointsFilterComponent,
  DeliveryPointsHeaderComponent,
  DeliveryPointsListComponent,
  GoToCatalogComponent,
  LegalEntitiesListComponent,
} from '@io/frontend/feature/customer/supplier-select';

@Component({
  selector: 'io-widget-desktop-supplier-select',
  standalone: true,
  imports: [
    CommonModule,
    FrontendCustomerHeaderComponent,
    FrontendCustomerSubHeaderComponent,
    FrontendSharedCustomerFooterDesktopComponent,
    GoToCatalogComponent,
    LegalEntitiesListComponent,
    DeliveryPointsHeaderComponent,
    DeliveryPointsFilterComponent,
    DeliveryPointsListComponent,
    ContractsHeaderComponent,
    ContractsSignedComponent,
    ContractsUnsignedComponent,
  ],
  templateUrl: './desktop-supplier-select.component.html',
  styleUrl: './desktop-supplier-select.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WidgetDesktopSupplierSelectComponent {}
