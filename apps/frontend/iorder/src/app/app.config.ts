import { ApplicationConfig, inject } from '@angular/core';
import { Router, provideRouter, withComponentInputBinding, withRouterConfig, withViewTransitions } from '@angular/router';
import { appRoutes } from '@iorder-next/frontend/core/shared/routing';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { provideHttpCache, withHttpCacheInterceptor } from '@ngneat/cashew';
import { provideAnimations } from '@angular/platform-browser/animations';
import { ApiUrlInterceptor, TokenInterceptor } from '@iorder-next/frontend/core/shared/interceptors';

export const appConfig: ApplicationConfig = {
  providers: [
    provideClientHydration(),
    provideRouter(
      appRoutes,
      withComponentInputBinding(),
      withViewTransitions(),
      withRouterConfig({
        paramsInheritanceStrategy: 'always',
      }),
    ),
    provideHttpClient(
      withFetch(),
      withInterceptors([
        ApiUrlInterceptor,
        TokenInterceptor,
        withHttpCacheInterceptor()
      ])),
      provideHttpCache(),
      provideAnimations()
  ],
};
