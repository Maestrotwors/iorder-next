import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContractsListComponent } from '../../shared/contracts-list/contracts-list.component';

@Component({
  selector: 'io-contracts-signed',
  standalone: true,
  imports: [CommonModule, ContractsListComponent],
  templateUrl: './contracts-signed.component.html',
  styleUrl: './contracts-signed.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContractsSignedComponent {}
