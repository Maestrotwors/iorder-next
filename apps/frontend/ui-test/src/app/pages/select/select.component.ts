import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiMenuItemsComponent, UiMenuTriggerForDirective, UiSelectComponent } from '@io/frontend/ui/select';

@Component({
  selector: 'ui-page-select',
  standalone: true,
  imports: [CommonModule, UiSelectComponent, UiMenuItemsComponent, UiMenuTriggerForDirective],
  templateUrl: './select.component.html',
  styleUrl: './select.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectComponent {}
