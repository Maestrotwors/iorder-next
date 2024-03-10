import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuService } from './menu.service';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'ui-test-nav-menu',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  template: `
    <ul>
      @for (menuItem of menuService.menuList; track menuItem.url) {
        <li>
          <a [routerLink]="menuItem.url" routerLinkActive="active-link">{{ menuItem.title }}</a>
        </li>
      }
    </ul>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: `
    .active-link {
      color: blue;
      font-weight: bold;
    }
  `,
})
export class UiTestNavMenuComponent {
  public menuService = inject(MenuService);
}
