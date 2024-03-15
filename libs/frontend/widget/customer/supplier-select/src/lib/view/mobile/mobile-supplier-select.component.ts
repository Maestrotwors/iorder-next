import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'io-widget-mobile-supplier-select',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mobile-supplier-select.component.html',
  styleUrl: './mobile-supplier-select.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WidgetMobileSupplierSelectComponent {}
