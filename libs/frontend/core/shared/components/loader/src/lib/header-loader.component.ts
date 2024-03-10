import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ProgressBarModule } from 'primeng/progressbar';
import { LoaderStore } from './loader-status.service';

@Component({
  selector: 'io-header-loader',
  imports: [ProgressBarModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="loader-container">
      @if (headerLoaderStatusService.isBusy()) {
        <p-progressBar
          mode="indeterminate"
          [style]="{ height: '3px', 'border-radius': 0, position: 'absolute', top: 0, right: 0, width: '100%' }"
        ></p-progressBar>
      }
    </div>
  `,
  standalone: true,
})
export class HeaderLoaderComponent {
  readonly headerLoaderStatusService = inject(LoaderStore);
}
