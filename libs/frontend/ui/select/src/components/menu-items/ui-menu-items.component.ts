import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ui-select-menu-items',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ui-menu-items.component.html',
  styleUrl: './ui-menu-items.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiMenuItemsComponent {}
