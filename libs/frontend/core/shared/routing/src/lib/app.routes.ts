import { Route } from '@angular/router';
import { RootRoutePath } from './paths/root.route-path';

export const appRoutes: Route[] = [
  {
    path: RootRoutePath.Customer,
    loadChildren: () => import(`./routes/customer.routing`)
      .then(mod => mod.routes)
  },
  {
    path: RootRoutePath.Landing,
    loadChildren: () => import(`./routes/landing.routes`)
      .then(mod => mod.routes)
  },
  {
    path: RootRoutePath.Supplier,
    loadChildren: () => import(`./routes/supplier.routes`)
      .then(mod => mod.routes)
  },
  {
    path: RootRoutePath.Admin,
    loadChildren: () => import(`./routes/admin.routes`)
      .then(mod => mod.routes)
  }
];
