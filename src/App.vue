<script lang="ts" setup>
import UiHeader from './components/ui/header.vue'
import UiFooter from './components/ui/footer.vue'
import UiContainer from './components/ui/container.vue'
</script>

<template>
  <ui-header />

  <ui-container tag="main" class="main">
    <router-view />
  </ui-container>

  <ui-footer />
</template>

<style lang="scss">
@import "./assets/scss/index.scss";

.main {
  flex: 1;
}
</style>
