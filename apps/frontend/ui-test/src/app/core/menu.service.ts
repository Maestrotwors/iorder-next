import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  menuList = [
    {
      title: 'Button',
      url: 'button',
    },
    {
      title: 'Badge',
      url: 'badge',
    },
    {
      title: 'Calendar',
      url: 'calendar',
    },
    {
      title: 'Card',
      url: 'card',
    },
    {
      title: 'CheckBox',
      url: 'check-box',
    },
    {
      title: 'Collapse',
      url: 'collapsible',
    },
    {
      title: 'Input',
      url: 'input',
    },
    {
      title: 'Nav Menu',
      url: 'nav-menu',
    },
    {
      title: 'Pagination',
      url: 'paginator',
    },
    {
      title: 'Popover',
      url: 'popover',
    },
    {
      title: 'Progress',
      url: 'progress',
    },
    {
      title: 'Radio',
      url: 'radio',
    },
    {
      title: 'Scroll-Area',
      url: 'scroll-area',
    },
    {
      title: 'Select',
      url: 'select',
    },
    {
      title: 'Tabs',
      url: 'tabs',
    },
    {
      title: 'Toast',
      url: 'toast',
    },
    {
      title: 'Tooltip',
      url: 'tooltip',
    },
  ];
}
