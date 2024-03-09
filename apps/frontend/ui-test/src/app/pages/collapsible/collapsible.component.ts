import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'iorder-next-collapsible',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './collapsible.component.html',
  styleUrl: './collapsible.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CollapsibleComponent {}
