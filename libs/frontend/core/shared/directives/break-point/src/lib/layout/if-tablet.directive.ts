import { Directive, TemplateRef, ViewContainerRef, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { BreakPointService } from '@io/frontend/core/shared/services/break-point';

@Directive({
  selector: '[ifTablet]',
  standalone: true,
})
export class IfTabletDirective {
  #templateRef = inject(TemplateRef);
  #viewContainer = inject(ViewContainerRef);
  #breakPointService = inject(BreakPointService);

  constructor() {
    this.#breakPointService.isTablet$.pipe(takeUntilDestroyed()).subscribe(isTablet => {
      if (isTablet) {
        this.#viewContainer.createEmbeddedView(this.#templateRef);
      } else {
        this.#viewContainer.clear();
      }
    });
  }
}
