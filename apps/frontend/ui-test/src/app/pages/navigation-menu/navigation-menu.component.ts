import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'iorder-next-navigation-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navigation-menu.component.html',
  styleUrl: './navigation-menu.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationMenuComponent {}
