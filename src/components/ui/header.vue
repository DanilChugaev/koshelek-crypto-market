<script setup lang="ts">
import UiLogo from './logo.vue'
import UiContainer from './container.vue'
import UiNavigation from './navigation.vue'
</script>

<template>
  <ui-container tag="header" class="ui-header">
    <router-link :to="`${$basePath}/`">
      <ui-logo />
    </router-link>

    <ui-navigation class="ui-header__navigation"/>
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
