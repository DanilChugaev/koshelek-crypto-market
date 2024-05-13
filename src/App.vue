<script lang="ts" setup>
import UiLogo from './components/ui/logo.vue'
</script>

<template>
  <div>
    <ui-logo />

    <br>
    <router-link :to="`${$basePath}/`">Order book</router-link>
/
    <router-link :to="`${$basePath}/settings`">Settings</router-link>
    <router-view></router-view>
  </div>
</template>

<style lang="scss">
@import "./assets/scss/index.scss";
</style>
