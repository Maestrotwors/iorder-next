import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'io-delivery-points-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './delivery-points-header.component.html',
  styleUrl: './delivery-points-header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DeliveryPointsHeaderComponent {}
