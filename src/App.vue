<script lang="ts" setup>
import UiHeader from './components/ui/header.vue'
import UiFooter from './components/ui/footer.vue'
import UiContainer from './components/ui/container.vue'
</script>

<template>
  <ui-header />

  <ui-container tag="main">
    <router-view></router-view>
  </ui-container>

  <ui-footer class="footer" />
</template>

<style lang="scss">
@import "./assets/scss/index.scss";

.footer {
  margin-top: auto;
}
</style>
