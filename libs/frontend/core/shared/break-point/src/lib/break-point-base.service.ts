import { BehaviorSubject, distinctUntilChanged, filter } from 'rxjs';
import { DeviceWidth } from './device-width.interface';
import { breakPointConfig } from './break-point.config';

export class BreakPointBaseService {
    protected currentDeviceWidthSubject = new BehaviorSubject<DeviceWidth | null>(null);
    protected isSmallMobileSubject = new BehaviorSubject<boolean | null>(null);
    protected isBigMobileSubject = new BehaviorSubject<boolean | null>(null);
    protected isMobileSubject = new BehaviorSubject<boolean | null>(null);
    protected isTabletSubject = new BehaviorSubject<boolean | null>(null);
    protected isTabletAndLessSubject = new BehaviorSubject<boolean | null>(null);
    protected isDesktopSubject = new BehaviorSubject<boolean | null>(null);

    public currentDeviceWidth$ = this.currentDeviceWidthSubject.asObservable().pipe(
        filter(value => value !== null),
        distinctUntilChanged(),
    );
    public isSmallMobile$ = this.isSmallMobileSubject.asObservable().pipe(
        filter(value => value !== null),
        distinctUntilChanged(),
    );
    public isBigMobile$ = this.isBigMobileSubject.asObservable().pipe(
        filter(value => value !== null),
        distinctUntilChanged(),
    );
    public isMobile$ = this.isMobileSubject.asObservable().pipe(
        filter(value => value !== null),
        distinctUntilChanged(),
    );
    public isTablet$ = this.isTabletSubject.asObservable().pipe(
        filter(value => value !== null),
        distinctUntilChanged(),
    );
    public isTabletAndLess$ = this.isTabletAndLessSubject.asObservable().pipe(
        filter(value => value !== null),
        distinctUntilChanged(),
    );
    public isDesktop$ = this.isDesktopSubject.asObservable().pipe(
        filter(value => value !== null),
        distinctUntilChanged(),
    );

    protected readonly smallMobileBreakPoint = `(max-width: ${breakPointConfig.maxSmallMobile}px)`;
    protected readonly bigMobileBreakPoint = `(min-width: ${breakPointConfig.maxSmallMobile + 0.02}px) and (max-width: ${
        breakPointConfig.maxBigMobile
    }px)`;
    protected readonly tabletBreakPoint = `(min-width: ${breakPointConfig.maxBigMobile + 0.02}px) and (max-width: ${
        breakPointConfig.maxTabletAndLess
    }px)`;
    protected readonly desktopBreakPoint = `(min-width: ${breakPointConfig.maxTabletAndLess + 0.02}px)`;
}
