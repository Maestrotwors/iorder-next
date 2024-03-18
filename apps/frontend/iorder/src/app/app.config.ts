import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter, withComponentInputBinding, withRouterConfig, withViewTransitions } from '@angular/router';
import { appRoutes } from '@io/frontend/core/shared/routing';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { provideHttpCache, withHttpCacheInterceptor } from '@ngneat/cashew';
import { ApiUrlInterceptor, TokenInterceptor } from '@io/frontend/core/shared/interceptors';
import { provideAnimations } from '@angular/platform-browser/animations';
import { CircleX, LucideAngularModule, SquareUserRound, X } from 'lucide-angular';

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
    provideHttpClient(withFetch(), withInterceptors([ApiUrlInterceptor, TokenInterceptor, withHttpCacheInterceptor()])),
    provideHttpCache(),
    provideAnimations(),
    importProvidersFrom(LucideAngularModule.pick({ CircleX, X, SquareUserRound })),
  ],
};
