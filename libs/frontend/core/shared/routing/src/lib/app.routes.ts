import { Route } from '@angular/router';
import { adminRoutes } from './routes/admin.routes';
import { supplierRoutes } from './routes/supplier.routes';
import { customerRoutes } from './routes/customer.routes';
import { landingRoutes } from './routes/landing.routes';

export const appRoutes: Route[] = [
  customerRoutes,
  supplierRoutes,
  adminRoutes,
  landingRoutes
];
