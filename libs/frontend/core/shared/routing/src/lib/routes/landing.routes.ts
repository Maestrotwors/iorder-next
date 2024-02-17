export const landingRoutes = {
  path: '',
  loadComponent: () => import('@iorder-next/frontend/page/landing/main').then(c => c.FrontendPageLandingMainComponent)
};
