import { Directive, ElementRef, HostBinding, HostListener, Input } from '@angular/core';
import { imageNotFoundDefault } from './constants';

@Directive({
  selector: '[imgLoader]',
  standalone: true,
  host: {
    "(load)": "onLoad()",
    "(error)": "onError()",
    "[attr.src]": 'src',
    "[class]": "class"
  }
})
export class ImgLoaderDirective {
  @Input() loadSrc: string | null = null;
  @Input() errorSrc: string = imageNotFoundDefault;

  class = '';
  src = '';

  onLoad() {
    this.class = '';
  }

  onError() {
    this.class = '';
    this.src = this.errorSrc;
  }

  ngOnInit() {
    if (!this.loadSrc) {
      this.class = '';
      this.src = this.errorSrc;
      return;
    }
    this.src = this.loadSrc;
    this.class = 'skeleton';
  }
}
