import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiButtonComponent } from '@iorder-next/frontend/ui/button';

@Component({
  selector: 'io-contact-us-buttons-container',
  standalone: true,
  imports: [CommonModule, UiButtonComponent],
  templateUrl: './buttons-container.component.html',
  styleUrl: './buttons-container.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonsContainerComponent {}
