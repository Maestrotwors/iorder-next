import { ChangeDetectionStrategy, Component, EventEmitter, Output, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule } from 'lucide-angular';
import { TagPresetsType } from './presets.enum';

@Component({
  selector: 'ui-tag',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [],
  host: {
    '[class]': 'appearance()',
  },
})
export class UiTagComponent {
  closable = input();
  appearance = input<TagPresetsType | null>(null);

  @Output() closeEvent = new EventEmitter();

  close(): void {
    this.closeEvent.emit();
  }
}
