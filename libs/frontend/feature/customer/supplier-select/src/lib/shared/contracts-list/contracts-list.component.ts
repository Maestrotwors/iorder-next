import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContractItemComponent } from './components/contract-item/contract-item.component';

@Component({
  selector: 'io-contracts-list',
  standalone: true,
  imports: [CommonModule, ContractItemComponent],
  templateUrl: './contracts-list.component.html',
  styleUrl: './contracts-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContractsListComponent {}
