import { inject } from "@angular/core";
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from "@angular/router";

export const checkCatalogPageGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
) => {
  const page = route.queryParams['page'];
  if (page) {
    return true;
  }

  return inject(Router).createUrlTree(['/member-user/catalog'],
    { queryParams: { ...route.queryParams, page: '1' }, queryParamsHandling: 'merge' }
  );
};
