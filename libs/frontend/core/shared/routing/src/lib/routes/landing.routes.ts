import { RootRoutePath } from '../paths/root.route-path';

export const landingRoutes = {
  path: RootRoutePath.Landing,
  loadComponent: () => import('@iorder-next/frontend/page/landing/main').then(c => c.FrontendPageLandingMainComponent)
};
