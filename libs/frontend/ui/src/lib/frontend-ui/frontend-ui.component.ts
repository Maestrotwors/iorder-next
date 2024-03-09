import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ui',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './frontend-ui.component.html',
  styleUrl: './frontend-ui.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FrontendUiComponent {}
