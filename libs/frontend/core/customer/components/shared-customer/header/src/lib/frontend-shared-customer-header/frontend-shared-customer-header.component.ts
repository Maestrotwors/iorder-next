import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: '-undefined',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './frontend-shared-customer-header.component.html',
  styleUrl: './frontend-shared-customer-header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FrontendSharedCustomerHeaderComponent {}
