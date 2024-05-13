<script setup lang="ts">
import { inject } from 'vue'
import { PageRoute } from '../../types'
import UiLogo from './logo.vue'
import UiContainer from './container.vue'
import UiNavigation from './navigation.vue'

const basePath = inject('basePath')
</script>

<template>
  <ui-container tag="header" class="ui-header">
    <router-link :to="`${basePath}${PageRoute.orderBook}`">
      <ui-logo />
    </router-link>

    <ui-navigation class="ui-header__navigation" />
  </ui-container>
</template>

<style scoped lang="scss">
.ui-header {
  border-bottom: var(--border);

  &__navigation {
    margin-left: auto;
  }
}
</style>
