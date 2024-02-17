import { ApplicationConfig } from '@angular/core';
import { provideRouter, withComponentInputBinding, withRouterConfig } from '@angular/router';
import { appRoutes } from '@iorder-next/frontend/core/shared/routing';
import { provideClientHydration } from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  providers: [
    provideClientHydration(),
    provideRouter(
      appRoutes,
      withComponentInputBinding(),
      withRouterConfig({paramsInheritanceStrategy: 'always'}))
  ],
};
