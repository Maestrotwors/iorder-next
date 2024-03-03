import { Directive, ElementRef, HostListener, Input, Renderer2, input } from '@angular/core';
import { imageNotFoundDefault } from './constants';

@Directive({
  selector: '[imgLoader]',
  standalone: true
})
export class ImgLoaderDirective {
  @Input() ngSrc: string | null = null;
  @Input() errorSrc: string = imageNotFoundDefault;

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  @HostListener('load')
  onLoad() {
    this.renderer.setAttribute(this.el.nativeElement, 'class', '');
  }

  @HostListener('error')
  onError() {
    this.renderer.setAttribute(this.el.nativeElement, 'class', '');
    this.renderer.setAttribute(this.el.nativeElement, 'src', this.errorSrc);
  }

  ngOnInit() {
    if (!this.ngSrc) {
      this.renderer.setAttribute(this.el.nativeElement, 'class', '');
      this.renderer.setAttribute(this.el.nativeElement, 'src', this.errorSrc);
      return;
    }
    this.renderer.setAttribute(this.el.nativeElement, 'class', 'skeleton');
  }
}
