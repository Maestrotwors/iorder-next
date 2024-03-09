import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiTestNavMenuComponent } from './menu.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'iorder-next-root',
  standalone: true,
  imports: [CommonModule, UiTestNavMenuComponent, RouterOutlet],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="container">
      <iorder-next-ui-test-nav-menu class="menu"></iorder-next-ui-test-nav-menu>
      <div class="content">
        <router-outlet></router-outlet>
      </div>
    </div>
  `,
  styles: `
    .container {
      display: grid;
      grid-template-columns: 11rem 1fr;
      min-height: 100vh;
    }

    .menu {
      border-right: 1px solid #e0e0e0;
      padding: 1rem;
    }

    .content {
      padding: 1rem;
    }
  `,
})
export class UiTestComponent {}
