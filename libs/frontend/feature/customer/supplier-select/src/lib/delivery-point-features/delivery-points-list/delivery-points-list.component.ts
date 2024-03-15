import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'io-delivery-points-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './delivery-points-list.component.html',
  styleUrl: './delivery-points-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DeliveryPointsListComponent {}
