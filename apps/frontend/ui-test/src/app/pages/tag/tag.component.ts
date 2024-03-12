import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiTagComponent } from '@iorder-next/frontend/ui/tag';

@Component({
  selector: 'ui-test-tag',
  standalone: true,
  imports: [CommonModule, UiTagComponent],
  templateUrl: './tag.component.html',
  styleUrl: './tag.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TagComponent {}
