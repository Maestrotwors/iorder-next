import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiAccordionComponent } from '@iorder-next/frontend/ui/accordion';

@Component({
  selector: 'ui-page-collapsible',
  standalone: true,
  imports: [CommonModule, UiAccordionComponent],
  templateUrl: './collapsible.component.html',
  styleUrl: './collapsible.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CollapsibleComponent {}
