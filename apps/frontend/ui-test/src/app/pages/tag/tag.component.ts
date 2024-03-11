import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiBadgeComponent } from '@iorder-next/frontend/ui';

@Component({
  selector: 'ui-test-badge',
  standalone: true,
  imports: [CommonModule, UiBadgeComponent],
  templateUrl: './badge.component.html',
  styleUrl: './badge.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BadgeComponent {}
