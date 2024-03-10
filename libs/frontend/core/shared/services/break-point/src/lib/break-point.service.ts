import { Injectable, inject } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { BehaviorSubject, distinctUntilChanged, map, tap } from 'rxjs';
import { DeviceWidth, DeviceWidthEnum } from './device-width.interface';
import { breakPointConfig } from './break-point.config';

@Injectable({ providedIn: 'root' })
export class BreakPointService {
  #breakpointObserver = inject(BreakpointObserver);

  #smallMobileBreakPoint = `(max-width: ${breakPointConfig.maxSmallMobile}px)`;
  #bigMobileBreakPoint = `(min-width: ${breakPointConfig.maxSmallMobile + 0.02}px) and (max-width: ${breakPointConfig.maxBigMobile}px)`;
  #tabletBreakPoint = `(min-width: ${breakPointConfig.maxBigMobile + 0.02}px) and (max-width: ${breakPointConfig.maxTabletAndLess}px)`;
  #desktopBreakPoint = `(min-width: ${breakPointConfig.maxTabletAndLess + 0.02}px)`;

  #currentDeviceWidthSubject = new BehaviorSubject<DeviceWidth | null>(null);

  public readonly breakpoint$ = this.#breakpointObserver
    .observe([this.#desktopBreakPoint, this.#tabletBreakPoint, this.#bigMobileBreakPoint, this.#smallMobileBreakPoint])
    .pipe(
      distinctUntilChanged(),
      tap(() => this.breakpointChanged()),
    );
  private breakpointChanged(): void {
    if (this.#breakpointObserver.isMatched(this.#desktopBreakPoint)) {
      this.#currentDeviceWidthSubject.next(DeviceWidthEnum.Desktop);
    } else if (this.#breakpointObserver.isMatched(this.#tabletBreakPoint)) {
      this.#currentDeviceWidthSubject.next(DeviceWidthEnum.Tablet);
    } else if (this.#breakpointObserver.isMatched(this.#bigMobileBreakPoint)) {
      this.#currentDeviceWidthSubject.next(DeviceWidthEnum.BigMobile);
    } else if (this.#breakpointObserver.isMatched(this.#smallMobileBreakPoint)) {
      this.#currentDeviceWidthSubject.next(DeviceWidthEnum.SmallMobile);
    }
  }

  public currentDeviceWidth$ = this.#currentDeviceWidthSubject.pipe(
    map(value => value !== null),
    distinctUntilChanged(),
  );

  public isSmallMobile$ = this.#currentDeviceWidthSubject.pipe(
    map(value => value !== null && value === DeviceWidthEnum.SmallMobile),
    distinctUntilChanged(),
  );

  public isBigMobile$ = this.#currentDeviceWidthSubject.pipe(
    map(value => value !== null && value === DeviceWidthEnum.BigMobile),
    distinctUntilChanged(),
  );

  public isMobile$ = this.#currentDeviceWidthSubject.pipe(
    map(value => value !== null && (value === DeviceWidthEnum.BigMobile || value === DeviceWidthEnum.SmallMobile)),
    distinctUntilChanged(),
  );

  public isTablet$ = this.#currentDeviceWidthSubject.pipe(
    map(value => value !== null && value === DeviceWidthEnum.Tablet),
    distinctUntilChanged(),
  );

  public isTabletAndLess$ = this.#currentDeviceWidthSubject.pipe(
    map(
      value =>
        value !== null &&
        (value === DeviceWidthEnum.Tablet || value === DeviceWidthEnum.SmallMobile || value === DeviceWidthEnum.BigMobile),
    ),
    distinctUntilChanged(),
  );

  public isDesktop$ = this.#currentDeviceWidthSubject.pipe(
    map(value => value !== null && value === DeviceWidthEnum.Desktop),
    distinctUntilChanged(),
  );
}
