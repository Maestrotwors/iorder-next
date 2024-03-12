import { ChangeDetectionStrategy, Component, model } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ui-accordion',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './accordion.component.html',
  styleUrl: './accordion.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiAccordionComponent {
  collapse = model<boolean>(false);
  toogle() {
    this.collapse.set(!this.collapse());
  }
}
