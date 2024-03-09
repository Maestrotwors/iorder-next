import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'button',
    loadComponent: () => import('./pages/button/button.component').then(c => c.ButtonComponent),
  },
  {
    path: 'alert',
    loadComponent: () => import('./pages/alert/alert.component').then(c => c.AlertComponent),
  },
  {
    path: 'calendar',
    loadComponent: () => import('./pages/calendar/calendar.component').then(c => c.CalendarComponent),
  },
  {
    path: 'card',
    loadComponent: () => import('./pages/card/card.component').then(c => c.CardComponent),
  },
  {
    path: 'check-box',
    loadComponent: () => import('./pages/checkbox/checkbox.component').then(c => c.CheckboxComponent),
  },
  {
    path: 'collapsible',
    loadComponent: () => import('./pages/collapsible/collapsible.component').then(c => c.CollapsibleComponent),
  },
  {
    path: 'input',
    loadComponent: () => import('./pages/input/input.component').then(c => c.InputComponent),
  },
  {
    path: 'nav-menu',
    loadComponent: () => import('./pages/navigation-menu/navigation-menu.component').then(c => c.NavigationMenuComponent),
  },
  {
    path: 'paginator',
    loadComponent: () => import('./pages/pagination/pagination.component').then(c => c.PaginationComponent),
  },
  {
    path: 'popover',
    loadComponent: () => import('./pages/popover/popover.component').then(c => c.PopoverComponent),
  },
  {
    path: 'progress',
    loadComponent: () => import('./pages/progress/progress.component').then(c => c.ProgressComponent),
  },
  {
    path: 'radio',
    loadComponent: () => import('./pages/radio/radio.component').then(c => c.RadioComponent),
  },
  {
    path: 'scroll-area',
    loadComponent: () => import('./pages/scroll-area/scroll-area.component').then(c => c.ScrollAreaComponent),
  },
  {
    path: 'select',
    loadComponent: () => import('./pages/select/select.component').then(c => c.SelectComponent),
  },
  {
    path: 'tabs',
    loadComponent: () => import('./pages/tabs/tabs.component').then(c => c.TabsComponent),
  },
  {
    path: 'toast',
    loadComponent: () => import('./pages/toast/toast.component').then(c => c.ToastComponent),
  },
  {
    path: 'tooltip',
    loadComponent: () => import('./pages/tooltip/tooltip.component').then(c => c.TooltipComponent),
  },
  {
    path: '',
    redirectTo: 'button',
    pathMatch: 'full',
  },
];
