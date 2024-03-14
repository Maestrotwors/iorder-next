import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckBoxState, CheckBoxStateEnum, UiCheckboxComponent } from '@iorder-next/frontend/ui/check-box';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'ui-page-checkbox',
  standalone: true,
  imports: [CommonModule, FormsModule, UiCheckboxComponent],
  templateUrl: './checkbox.component.html',
  styleUrl: './checkbox.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CheckboxComponent {
  data: CheckBoxState = CheckBoxStateEnum.Indeterminate;
  checked = signal(true);
}
