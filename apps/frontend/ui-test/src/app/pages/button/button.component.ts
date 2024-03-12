import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiButtonComponent } from '@iorder-next/frontend/ui/button';

@Component({
  selector: 'ui-button',
  standalone: true,
  imports: [CommonModule, UiButtonComponent],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {}
