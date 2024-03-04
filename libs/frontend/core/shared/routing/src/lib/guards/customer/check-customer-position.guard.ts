import { inject } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from "@angular/router";

export const checkCustomerPositionGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
) => {
  const sId = route.queryParams['sId'];
  const dp = route.queryParams['dp'];
  const le = route.queryParams['le'];

  if (sId && dp && le) {
    return true;
  }
  return inject(Router).createUrlTree(['/member-user/suppliers'], {queryParamsHandling: 'merge'});
};
