import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'io-supplier-page-main',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './frontend-page-supplier-main.component.html',
  styleUrl: './frontend-page-supplier-main.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FrontendPageSupplierMainComponent {}
