import { Directive, TemplateRef, ViewContainerRef, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { BreakPointService } from '@io/frontend/core/shared/services/break-point';

@Directive({
  selector: '[ifDesktop]',
  standalone: true,
})
export class IfDesktopDirective {
  #templateRef = inject(TemplateRef);
  #viewContainer = inject(ViewContainerRef);
  #breakPointService = inject(BreakPointService);

  constructor() {
    this.#breakPointService.isDesktop$.pipe(takeUntilDestroyed()).subscribe(isDesktop => {
      if (isDesktop) {
        this.#viewContainer.createEmbeddedView(this.#templateRef);
      } else {
        this.#viewContainer.clear();
      }
    });
  }
}
