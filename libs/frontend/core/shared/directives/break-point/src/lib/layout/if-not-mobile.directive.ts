import { Directive, TemplateRef, ViewContainerRef, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { BreakPointService } from '@io/frontend/core/shared/services/break-point';

@Directive({
  selector: '[ifNotMobile]',
  standalone: true,
})
export class IfNotMobileDirective {
  #templateRef = inject(TemplateRef);
  #viewContainer = inject(ViewContainerRef);
  #breakPointService = inject(BreakPointService);

  constructor() {
    this.#breakPointService.isMobile$.pipe(takeUntilDestroyed()).subscribe(isMobile => {
      if (!isMobile) {
        this.#viewContainer.createEmbeddedView(this.#templateRef);
      } else {
        this.#viewContainer.clear();
      }
    });
  }
}
