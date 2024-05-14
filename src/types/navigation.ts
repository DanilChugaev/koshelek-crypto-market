import type { RouteLocationRaw } from 'vue-router'

export enum PageRoute {
  orderBook = '/',
  settings = '/settings',
}

export interface INavigation {
  id: string
  label: string
  to: RouteLocationRaw
}
