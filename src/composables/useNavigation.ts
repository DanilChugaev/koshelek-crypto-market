import { inject, ref } from 'vue'
import { PageRoute } from '~/types'

export function useNavigation() {
  const basePath = inject('basePath')

  const navigation = ref([
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
