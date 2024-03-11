import { ChangeDetectionStrategy, Component, Input, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { CheckBoxState } from './interfaces/check-box-state.interface';

@Component({
  selector: 'ui-checkbox',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => UiCheckboxComponent),
      multi: true,
    },
  ],
})
export class UiCheckboxComponent implements ControlValueAccessor {
  @Input() state: CheckBoxState = 'indeterminate';

  checkToggle() {
    switch (this.state) {
      case 'checked':
        this.state = 'unchecked';
        break;
      case 'unchecked':
        this.state = 'checked';
        break;
      case 'indeterminate':
        this.state = 'checked';
        break;
    }
  }

  onChange: unknown;

  onTouch: unknown;

  set value(val: CheckBoxState) {
    this.state = val;
    this.onChange(val);
    this.onTouch(val);
  }

  writeValue(value: CheckBoxState) {
    this.state = value;
  }

  registerOnChange(fn: CheckBoxState) {
    this.onChange = fn;
  }

  registerOnTouched(fn: CheckBoxState) {
    this.onTouch = fn;
  }
}
