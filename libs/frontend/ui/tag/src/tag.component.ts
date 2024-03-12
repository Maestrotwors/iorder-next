import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule } from 'lucide-angular';
import { TagPresetsEnum, TagPresetsType } from './presets.enum';
import { presetsArray } from './presets.conf';

@Component({
  selector: 'ui-tag',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [],
})
export class UiTagComponent implements OnInit {
  protected backgroundColor = '';
  protected textColor = '';
  protected borderColor = '';

  closable = input();
  preset = input<TagPresetsType | null>(null);

  @Output() closeEvent = new EventEmitter();

  ngOnInit() {
    this.configPreset();
  }

  private configPreset(): void {
    const preset = this.preset();
    if (preset !== null) {
      const currentPreset = presetsArray.get(preset);
      if (currentPreset) {
        this.setPreset(currentPreset);
      } else {
        this.setDefaultPreset();
      }
    } else {
      this.setDefaultPreset();
    }
  }

  private setDefaultPreset(): void {
    const defaultPreset = presetsArray.get(TagPresetsEnum.Default);
    if (defaultPreset) this.setPreset(defaultPreset);
  }

  private setPreset(data: { backgroundColor: string; textColor: string; borderColor: string }): void {
    this.backgroundColor = data.backgroundColor;
    this.textColor = data.textColor;
    this.borderColor = data.borderColor;
  }

  close(): void {
    this.closeEvent.emit();
  }
}
