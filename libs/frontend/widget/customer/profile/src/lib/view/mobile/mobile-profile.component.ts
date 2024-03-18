import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'io-widget-mobile-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mobile-profile.component.html',
  styleUrl: './mobile-profile.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WidgetMobileProfileComponent {}
