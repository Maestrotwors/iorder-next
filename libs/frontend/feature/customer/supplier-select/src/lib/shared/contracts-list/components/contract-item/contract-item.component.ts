import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'io-contract-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contract-item.component.html',
  styleUrl: './contract-item.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContractItemComponent {}
