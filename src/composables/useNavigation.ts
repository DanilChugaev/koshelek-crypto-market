import { inject, ref } from 'vue'
import type { INavigation } from '../types'
import { PageRoute } from '../types'

export function useNavigation() {
  const basePath = inject('basePath')

  const navigation = ref<INavigation[]>([
    {
      id: 'orderBook',
      label: 'Order book',
      to: `${basePath}${PageRoute.orderBook}`,
    },
    {
      id: 'settings',
      label: 'Settings',
      to: `${basePath}${PageRoute.settings}`,
    },
  ])

  return {
    navigation,
  }
}
