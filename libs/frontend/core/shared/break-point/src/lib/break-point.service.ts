import { Injectable, inject } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { distinctUntilChanged, tap } from 'rxjs';
import { DeviceWidthEnum } from './device-width.interface';
import { BreakPointBaseService } from './break-point-base.service';

@Injectable({ providedIn: 'root' })
export class BreakPointService extends BreakPointBaseService {
    private breakpointObserver = inject(BreakpointObserver);

    public readonly breakpoint$ = this.breakpointObserver
        .observe([this.desktopBreakPoint, this.tabletBreakPoint, this.bigMobileBreakPoint, this.smallMobileBreakPoint])
        .pipe(
            distinctUntilChanged(),
            tap(() => this.breakpointChanged()),
        );
    private breakpointChanged(): void {
        if (this.breakpointObserver.isMatched(this.desktopBreakPoint)) {
            this.handleDesktopWidth();
        } else if (this.breakpointObserver.isMatched(this.tabletBreakPoint)) {
            this.handleTabletWidth();
        } else if (this.breakpointObserver.isMatched(this.bigMobileBreakPoint)) {
            this.handleBigMobileWidth();
        } else if (this.breakpointObserver.isMatched(this.smallMobileBreakPoint)) {
            this.handleSmallMobileWidth();
        }
    }

    private handleDesktopWidth(): void {
        this.isSmallMobileSubject.next(false);
        this.isBigMobileSubject.next(false);
        this.isMobileSubject.next(false);
        this.isTabletSubject.next(false);
        this.isTabletAndLessSubject.next(false);
        this.isDesktopSubject.next(true);
        this.currentDeviceWidthSubject.next(DeviceWidthEnum.Desktop);
    }

    private handleTabletWidth(): void {
        this.isSmallMobileSubject.next(false);
        this.isBigMobileSubject.next(false);
        this.isMobileSubject.next(false);
        this.isTabletSubject.next(true);
        this.isTabletAndLessSubject.next(true);
        this.isDesktopSubject.next(false);
        this.currentDeviceWidthSubject.next(DeviceWidthEnum.Tablet);
    }

    private handleBigMobileWidth(): void {
        this.isSmallMobileSubject.next(false);
        this.isBigMobileSubject.next(true);
        this.isMobileSubject.next(true);
        this.isTabletSubject.next(false);
        this.isTabletAndLessSubject.next(true);
        this.isDesktopSubject.next(false);
        this.currentDeviceWidthSubject.next(DeviceWidthEnum.BigMobile);
    }

    private handleSmallMobileWidth(): void {
        this.isSmallMobileSubject.next(true);
        this.isBigMobileSubject.next(false);
        this.isMobileSubject.next(true);
        this.isTabletSubject.next(false);
        this.isTabletAndLessSubject.next(true);
        this.isDesktopSubject.next(false);
        this.currentDeviceWidthSubject.next(DeviceWidthEnum.SmallMobile);
    }
}
