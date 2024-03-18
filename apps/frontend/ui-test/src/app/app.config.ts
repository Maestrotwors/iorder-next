import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import { LucideAngularModule, CircleX, X, SquareUserRound } from 'lucide-angular';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(appRoutes), importProvidersFrom(LucideAngularModule.pick({ CircleX, X, SquareUserRound }))],
};
