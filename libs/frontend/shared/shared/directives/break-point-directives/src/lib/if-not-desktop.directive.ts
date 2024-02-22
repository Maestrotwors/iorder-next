import { Directive, TemplateRef, ViewContainerRef, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { BreakPointService } from '@iorder-next/frontend/core/shared/break-point';

@Directive({
  selector: '[ifNotDesktop]',
  standalone: true
})
export class IfNotDesktopDirective {
  #templateRef = inject(TemplateRef);
  #viewContainer = inject(ViewContainerRef);
  #breakPointService = inject(BreakPointService);

  constructor() {
    this.#breakPointService.isDesktop$.pipe(takeUntilDestroyed()).subscribe((isDesktop) => {
      if (!isDesktop) {
        this.#viewContainer.createEmbeddedView(this.#templateRef);
      } else {
        this.#viewContainer.clear();
      }
    });
  }
}
