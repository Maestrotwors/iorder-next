import { ApplicationConfig } from '@angular/core';
import { provideRouter, withComponentInputBinding, withRouterConfig, withViewTransitions } from '@angular/router';
import { appRoutes } from '@iorder-next/frontend/core/shared/routing';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideHttpCache, withHttpCacheInterceptor } from '@ngneat/cashew';

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
        provideHttpClient(withInterceptors([withHttpCacheInterceptor()])),
        provideHttpCache(),
    ],
};
