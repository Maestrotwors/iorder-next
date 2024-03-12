import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import { LucideAngularModule, CircleX, X } from 'lucide-angular';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(appRoutes), importProvidersFrom(LucideAngularModule.pick({ CircleX, X }))],
};
