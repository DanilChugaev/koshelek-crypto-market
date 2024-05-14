<script setup lang="ts">
import type { PropType } from 'vue'
import type { IOrderBook } from '../../types/orderBook'

defineProps({
  items: {
    type: Object as PropType<IOrderBook>,
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
        v-for="item of items"
        :key="item.price"
      >
        <td
          class="ui-table__cell" :class="[
            `ui-table__cell--${textColor}`,
          ]"
        >
          {{ item.price }}
        </td>
        <td class="ui-table__cell ui-table__cell--hidden-on-mobile">
          {{ item.quantity }}
        </td>
        <td class="ui-table__cell">
          {{ item.total }}
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
