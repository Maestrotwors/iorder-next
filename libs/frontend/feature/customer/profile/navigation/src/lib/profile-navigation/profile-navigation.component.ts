import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileTabItemComponent } from './components/profile-tab-item/profile-tab-item.component';
import { ProfileTabResultComponent } from './components/profile-tab-result/profile-tab-result.component';

@Component({
  selector: 'io-feature-profile-navigation',
  standalone: true,
  imports: [CommonModule, ProfileTabItemComponent, ProfileTabResultComponent],
  templateUrl: './profile-navigation.component.html',
  styleUrl: './profile-navigation.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeatureProfileNavigationComponent {}
