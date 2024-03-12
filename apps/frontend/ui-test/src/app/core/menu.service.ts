import { Injectable } from '@angular/core';
import { RouteEnum } from './route.model';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  menuList = [
    {
      title: 'Button',
      url: RouteEnum.BUTTON,
    },
    {
      title: 'Tag',
      url: RouteEnum.TAG,
    },
    {
      title: 'Badge',
      url: RouteEnum.BADGE,
    },
    {
      title: 'Calendar',
      url: RouteEnum.CALENDAR,
    },
    {
      title: 'Card',
      url: RouteEnum.CARD,
    },
    {
      title: 'CheckBox',
      url: RouteEnum.CHECKBOX,
    },
    {
      title: 'Collapse',
      url: RouteEnum.COLLAPSIBLE,
    },
    {
      title: 'Input',
      url: RouteEnum.INPUT,
    },
    {
      title: 'Nav Menu',
      url: RouteEnum.NAV_MENU,
    },
    {
      title: 'Pagination',
      url: RouteEnum.PAGINATOR,
    },
    {
      title: 'Popover',
      url: RouteEnum.POPOVER,
    },
    {
      title: 'Progress',
      url: RouteEnum.PROGRESS_BAR,
    },
    {
      title: 'Radio',
      url: RouteEnum.RADIO,
    },
    {
      title: 'Scroll-Area',
      url: RouteEnum.SCROLL_AREA,
    },
    {
      title: 'Select',
      url: RouteEnum.SELECT,
    },
    {
      title: 'Tabs',
      url: RouteEnum.TABS,
    },
    {
      title: 'Toast',
      url: RouteEnum.TOAST,
    },
    {
      title: 'Tooltip',
      url: RouteEnum.TOOLTIP,
    },
  ];
}
