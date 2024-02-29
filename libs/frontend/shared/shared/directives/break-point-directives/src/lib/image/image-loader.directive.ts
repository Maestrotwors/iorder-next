import { Directive, Input, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[imageLoader]',
  standalone: true
})
export class ImageLoaderDirective implements OnInit {
  @Input('ngSrc') ngSrc: string = '';
  @Input() preloaderSrc: string = 'path/to/your/preloader.gif';
  @Input() errorSrc: string = 'path/to/your/error-image.png';

  constructor(private el: ElementRef) {}

  ngOnInit() {
    this.loadImage();
  }

  loadImage() {
    const img = new Image();

    // Показываем изображение-прелоадер
    this.el.nativeElement.src = this.preloaderSrc;

    img.src = this.ngSrc;
    img.onload = () => {
      // Когда основное изображение загружено, отображаем его
      console.log(111);
      this.el.nativeElement.src = this.ngSrc;
    };
    img.onerror = () => {
      // В случае ошибки отображаем изображение ошибки
      this.el.nativeElement.src = this.errorSrc;
    };
  }
}
