import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'io-contracts-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contracts-header.component.html',
  styleUrl: './contracts-header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContractsHeaderComponent {}
