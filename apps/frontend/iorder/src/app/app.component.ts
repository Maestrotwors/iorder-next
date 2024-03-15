import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LayoutModule } from '@angular/cdk/layout';
import { BreakPointService } from '@io/frontend/core/shared/services/break-point';
import { DeviceInfoService } from '@io/frontend/core/shared/services/device-info';
import { HeaderLoaderComponent } from '@io/frontend/core/shared/components/loader';

@Component({
  standalone: true,
  imports: [RouterModule, LayoutModule, HeaderLoaderComponent],
  selector: 'io-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  readonly #breakPointService = inject(BreakPointService).breakpoint$.subscribe();
  readonly #deviceInfoService = inject(DeviceInfoService);
}
