import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'io-contracts-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contracts-list.component.html',
  styleUrl: './contracts-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContractsListComponent {}
