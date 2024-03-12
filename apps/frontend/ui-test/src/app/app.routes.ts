import { Route } from '@angular/router';
import { RouteEnum } from './core/route.model';

export const appRoutes: Route[] = [
  {
    path: RouteEnum.BUTTON,
    loadComponent: () => import('./pages/button/button.component').then(c => c.ButtonComponent),
  },
  {
    path: RouteEnum.TAG,
    loadComponent: () => import('./pages/tag/tag.component').then(c => c.TagComponent),
  },
  {
    path: RouteEnum.BADGE,
    loadComponent: () => import('./pages/badge/badge.component').then(c => c.BadgeComponent),
  },
  {
    path: RouteEnum.ALERT,
    loadComponent: () => import('./pages/alert/alert.component').then(c => c.AlertComponent),
  },
  {
    path: RouteEnum.CALENDAR,
    loadComponent: () => import('./pages/calendar/calendar.component').then(c => c.CalendarComponent),
  },
  {
    path: RouteEnum.CARD,
    loadComponent: () => import('./pages/card/card.component').then(c => c.CardComponent),
  },
  {
    path: RouteEnum.CHECKBOX,
    loadComponent: () => import('./pages/checkbox/checkbox.component').then(c => c.CheckboxComponent),
  },
  {
    path: RouteEnum.COLLAPSIBLE,
    loadComponent: () => import('./pages/collapsible/collapsible.component').then(c => c.CollapsibleComponent),
  },
  {
    path: RouteEnum.INPUT,
    loadComponent: () => import('./pages/input/input.component').then(c => c.InputComponent),
  },
  {
    path: RouteEnum.NAV_MENU,
    loadComponent: () => import('./pages/navigation-menu/navigation-menu.component').then(c => c.NavigationMenuComponent),
  },
  {
    path: RouteEnum.PAGINATOR,
    loadComponent: () => import('./pages/pagination/pagination.component').then(c => c.PaginationComponent),
  },
  {
    path: RouteEnum.POPOVER,
    loadComponent: () => import('./pages/popover/popover.component').then(c => c.PopoverComponent),
  },
  {
    path: RouteEnum.PROGRESS_BAR,
    loadComponent: () => import('./pages/progress/progress.component').then(c => c.ProgressComponent),
  },
  {
    path: RouteEnum.RADIO,
    loadComponent: () => import('./pages/radio/radio.component').then(c => c.RadioComponent),
  },
  {
    path: RouteEnum.SCROLL_AREA,
    loadComponent: () => import('./pages/scroll-area/scroll-area.component').then(c => c.ScrollAreaComponent),
  },
  {
    path: RouteEnum.SELECT,
    loadComponent: () => import('./pages/select/select.component').then(c => c.SelectComponent),
  },
  {
    path: RouteEnum.TABS,
    loadComponent: () => import('./pages/tabs/tabs.component').then(c => c.TabsComponent),
  },
  {
    path: RouteEnum.TOAST,
    loadComponent: () => import('./pages/toast/toast.component').then(c => c.ToastComponent),
  },
  {
    path: RouteEnum.TOOLTIP,
    loadComponent: () => import('./pages/tooltip/tooltip.component').then(c => c.TooltipComponent),
  },
  {
    path: '',
    redirectTo: RouteEnum.BUTTON,
    pathMatch: 'full',
  },
];
