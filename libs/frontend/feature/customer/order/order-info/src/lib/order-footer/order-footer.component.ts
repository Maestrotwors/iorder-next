import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiButtonComponent } from '@io/frontend/ui/button';

@Component({
  selector: 'io-order-footer',
  standalone: true,
  imports: [CommonModule, UiButtonComponent],
  templateUrl: './order-footer.component.html',
  styleUrl: './order-footer.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrderFooterComponent {}
