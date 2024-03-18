import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'io-profile-tab-result',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile-tab-result.component.html',
  styleUrl: './profile-tab-result.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileTabResultComponent {}
