import { Directive, ElementRef, HostListener, Input, TemplateRef, ViewContainerRef, inject, input } from '@angular/core';

@Directive({
  selector: '[UiMenuTriggerFor]',
  standalone: true,
})
export class UiMenuTriggerForDirective {
  #uiMenuTriggerFor = input('UiMenuTriggerFor');
  #elementRef = inject(ElementRef);

  //#templateRef = inject(TemplateRef);
  #viewContainer = inject(ViewContainerRef);

  constructor() {
    //this.#viewContainer.createEmbeddedView(this.#templateRef);
  }

  /*private isMenuOpen = false;

  @Input('uiMenuTriggerFor') set menuTemplateRef(value: TemplateRef<any>) {
    if (value && this.isMenuOpen) {
      this.viewContainer.createEmbeddedView(value);
    } else {
      this.viewContainer.clear();
    }
  }

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
  ) {}

  // Listen to click events on the host element
  @HostListener('click') toggleMenu() {
    alert('eee');
    this.isMenuOpen = !this.isMenuOpen;

    // Toggle the ng-template view
    if (this.isMenuOpen) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }*/
}
