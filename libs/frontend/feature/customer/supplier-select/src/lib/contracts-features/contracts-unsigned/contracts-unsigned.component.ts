import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContractsListComponent } from '../../shared/contracts-list/contracts-list.component';

@Component({
  selector: 'io-contracts-unsigned',
  standalone: true,
  imports: [CommonModule, ContractsListComponent],
  templateUrl: './contracts-unsigned.component.html',
  styleUrl: './contracts-unsigned.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContractsUnsignedComponent {}
