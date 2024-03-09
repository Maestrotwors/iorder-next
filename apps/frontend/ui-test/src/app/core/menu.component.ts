import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuService } from './menu.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'iorder-next-ui-test-nav-menu',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <ul>
      @for (menuItem of menuService.menuList; track menuItem.url) {
        <li>
          <a [routerLink]="menuItem.url">{{ menuItem.title }}</a>
        </li>
      }
    </ul>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: ``,
})
export class UiTestNavMenuComponent {
  public menuService = inject(MenuService);
}
