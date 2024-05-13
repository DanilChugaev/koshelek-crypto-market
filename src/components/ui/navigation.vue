<script setup lang="ts">
import { useNavigation } from '../../composables/useNavigation'

const { navigation } = useNavigation()
</script>

<template>
  <nav class="ui-navigation">
    <ul class="ui-navigation__list">
      <li
        v-for="item in navigation"
        :key="item.id"
        class="ui-navigation__item"
      >
        <v-btn :to="item.to">
          {{ item.label }}
        </v-btn>
      </li>
    </ul>
  </nav>
</template>

<style scoped lang="scss">
.ui-navigation {
  &__list {
    display: flex;
    gap: var(--spacer-b);
  }

  &__item {
    list-style: none;
  }
}
</style>
