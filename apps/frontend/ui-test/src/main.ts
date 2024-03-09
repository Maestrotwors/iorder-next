import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { UiTestComponent } from './app/core/ui-test.component';

bootstrapApplication(UiTestComponent, appConfig).catch();
