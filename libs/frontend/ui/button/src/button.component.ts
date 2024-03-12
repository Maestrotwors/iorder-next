import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

type Appearance = 'filled' | 'outlined' | 'elevated' | 'tonal' | 'text';

@Component({
  selector: 'button[ui-button], a[ui-button]',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class]': 'appearance',
  },
})
export class UiButtonComponent {
  @Input()
  appearance: Appearance = 'elevated';
}
