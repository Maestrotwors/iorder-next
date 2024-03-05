import { inject } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from "@angular/router";
import { z } from 'zod';

export const checkCatalogPageGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
) => {
  const pageSchema = z.number().int().positive();
  try {
    pageSchema.parse(+route.queryParams['page']);
    return true;
  } catch {
    return inject(Router).createUrlTree(['/member-user/catalog'],
      { queryParams: { ...route.queryParams, page: '1' } }
    );
  }
};
