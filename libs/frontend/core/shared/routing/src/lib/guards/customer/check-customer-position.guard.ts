import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router } from '@angular/router';

export const checkCustomerPositionGuard: CanActivateFn = (route: ActivatedRouteSnapshot) => {
  const sId = route.queryParams['sId'];
  const dp = route.queryParams['dp'];
  const le = route.queryParams['le'];

  if (+sId > 0 && +dp > 0 && +le > 0) {
    return true;
  }
  return inject(Router).createUrlTree(['/member-user/suppliers'], { queryParamsHandling: 'merge' });
};
