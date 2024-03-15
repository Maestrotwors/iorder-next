import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'io-delivery-points-filter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './delivery-points-filter.component.html',
  styleUrl: './delivery-points-filter.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DeliveryPointsFilterComponent {}
