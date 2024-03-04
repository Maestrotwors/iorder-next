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
  const activatedRoute = inject(ActivatedRoute);
  return inject(Router).createUrlTree([state.url.split('?')[0]], { queryParams: { page: '1' }, queryParamsHandling: 'merge'});
  /*
  const activatedRoute = inject(ActivatedRoute);
  console.log(state);
  console.log(route);
  console.log(activatedRoute);


  */
};
