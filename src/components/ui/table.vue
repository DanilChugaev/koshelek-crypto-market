<script setup lang="ts">
import type { PropType } from 'vue'

defineProps({
  items: {
    type: Array as PropType<number[][]>,
    required: true,
  },
  textColor: {
    type: String as PropType<'green' | 'red'>,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <v-table
    class="ui-table"
    density="compact"
    fixed-header
  >
    <template #top>
      <v-toolbar>
        <v-toolbar-title>{{ name }}</v-toolbar-title>
      </v-toolbar>
    </template>

    <thead>
      <tr>
        <th class="ui-table__cell text-left">
          Price
        </th>
        <th class="ui-table__cell ui-table__cell--hidden-on-mobile text-left">
          Quantity
        </th>
        <th class="ui-table__cell text-left">
          Total
        </th>
      </tr>
    </thead>

    <tbody>
      <tr
        v-for="item in items"
        :key="item[0]"
      >
        <td
          class="ui-table__cell" :class="[
            `ui-table__cell--${textColor}`,
          ]"
        >
          {{ item[0] }}
        </td>
        <td class="ui-table__cell ui-table__cell--hidden-on-mobile">
          {{ item[1] }}
        </td>
        <td class="ui-table__cell">
          {{ item[0] * item[1] }}
        </td>
      </tr>
    </tbody>
  </v-table>
</template>

<style scoped lang="scss">
.ui-table {
  flex: 1;
  max-height: 100%;

  &__cell {
    &--red {
      color: rgb(246, 70, 93);
    }

    &--green {
      color: rgb(14, 203, 129);
    }

    &--hidden-on-mobile {
      @media (max-width: 960px) {
        display: none;
      }
    }
  }
}
</style>
