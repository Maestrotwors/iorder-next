import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LayoutModule } from '@angular/cdk/layout';
import { BreakPointService } from '@iorder-next/frontend/core/shared/break-point';
import { DeviceInfoService } from '@iorder-next/frontend/core/shared/device-info';

@Component({
  standalone: true,
  imports: [RouterModule, LayoutModule],
  selector: 'io-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  private breakPointService = inject(BreakPointService).breakpoint$.subscribe(() => {});
  private deviceInfoService = inject(DeviceInfoService);
}
