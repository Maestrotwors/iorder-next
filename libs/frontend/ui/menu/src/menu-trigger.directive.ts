import { Directive } from '@angular/core';
import { CdkMenuTrigger } from '@angular/cdk/menu';

@Directive({
  selector: '[menuTrigger]',
  standalone: true,
  hostDirectives: [
    {
      directive: CdkMenuTrigger,
      inputs: ['cdkMenuTriggerFor: menuTrigger'],
    },
  ],
})
export class MenuTriggerDirective {}
