<script setup lang="ts">
import type { PropType } from 'vue'

defineProps({
  tag: {
    type: String as PropType<keyof HTMLElementTagNameMap>,
    default: 'div',
  },
})
</script>

<template>
  <component :is="tag" class="container">
    <div class="container__content">
      <slot />
    </div>
  </component>
</template>

<style scoped lang="scss">
.container {
  display: flex;
  flex-direction: column;
  align-items: center;

  &__content {
    display: flex;
    align-items: center;
    width: 100%;
    max-width: var(--size-container-width);
    padding: var(--spacer-d);
  }
}
</style>
