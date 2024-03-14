import { Route } from '@angular/router';
import { RootRoutePath } from '@iorder-next/frontend/core/shared/routing-paths';

export const appRoutes: Route[] = [
  {
    path: RootRoutePath.Customer,
    loadChildren: () => import(`./routes/customer.routing`).then(mod => mod.routes),
  },
  {
    path: RootRoutePath.Landing,
    loadChildren: () => import(`./routes/landing.routes`).then(mod => mod.routes),
  },
  {
    path: RootRoutePath.Supplier,
    loadChildren: () => import(`./routes/supplier.routes`).then(mod => mod.routes),
  },
  {
    path: RootRoutePath.Admin,
    loadChildren: () => import(`./routes/admin.routes`).then(mod => mod.routes),
  },
];
