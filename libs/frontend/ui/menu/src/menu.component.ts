import { CdkMenu } from '@angular/cdk/menu';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  standalone: true,
  template: `<ng-content></ng-content>`,
  selector: 'menu',
  hostDirectives: [CdkMenu],
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: `
    :host {
      display: inline-flex;
      flex-direction: column;
      min-width: 180px;
      max-width: 280px;
      background-color: rgba(255, 255, 0);
      padding: 6px 0;
    }
  `,
})
export class MenuContentComponent {}
