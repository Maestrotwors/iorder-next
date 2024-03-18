import { Directive, ElementRef, TemplateRef, ViewContainerRef, inject, input } from '@angular/core';
import { ConnectedOverlayPositionChange, Overlay, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal, TemplatePortal } from '@angular/cdk/portal';

@Directive({
  selector: '[menuTrigger]',
  standalone: true,
})
export class MenuTriggerDirective {
  template = input.required<TemplateRef<any>>({
    alias: 'menuTrigger',
  });

  private elementRef = inject(ElementRef);
  private overlay = inject(Overlay);
  private viewContainerRef = inject(ViewContainerRef);
  private overlayRef: OverlayRef | null = null;

  toggleMenu() {
    alert('toogle');
    if (this.overlayRef) {
      this.overlayRef.detach();
      this.overlayRef = null;
    } else {
      this.overlayRef = this.overlay.create({
        positionStrategy: this.overlay
          .position()
          .flexibleConnectedTo(this.elementRef)
          .withPositions([
            {
              originX: 'start',
              originY: 'bottom',
              overlayX: 'end',
              overlayY: 'center',
            },
          ]),
      });

      const userProfilePortal = new TemplatePortal(this.template(), this.viewContainerRef);
      this.overlayRef.attach(userProfilePortal);
    }
  }

  //checkClickOutsideHost(event: Event) {}
}

/*import { Directive } from '@angular/core';
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
export class MenuTriggerDirective {}*/
