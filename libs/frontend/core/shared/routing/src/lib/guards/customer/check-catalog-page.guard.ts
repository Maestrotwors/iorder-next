import { inject } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from "@angular/router";

export const checkCatalogPageGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot
) => {
  if (+route.queryParams['page'] > 0) {
    return true;
  } else {
    return inject(Router).createUrlTree(['/member-user/catalog'],
      { queryParams: { ...route.queryParams, page: '1' } }
    );
  }
};
