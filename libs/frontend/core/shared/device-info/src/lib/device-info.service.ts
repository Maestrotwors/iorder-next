import { Injectable, inject } from '@angular/core';
import { DeviceDetectorService, DeviceInfo } from 'ngx-device-detector';

@Injectable({ providedIn: 'root' })
export class DeviceInfoService {
    private deviceService = inject(DeviceDetectorService);
    getDeviceInfo(): DeviceInfo {
        return this.deviceService.getDeviceInfo();
    }

    isMobile(): boolean {
        return this.deviceService.isMobile();
    }

    isTablet(): boolean {
        return this.deviceService.isTablet();
    }

    isDesktop(): boolean {
        return this.deviceService.isDesktop();
    }

    deviceOs(): string {
        return this.deviceService.os;
    }

    deviceBrowser(): string {
        return this.deviceService.browser;
    }
}
