import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'io-profile-tab-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile-tab-item.component.html',
  styleUrl: './profile-tab-item.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileTabItemComponent {}
