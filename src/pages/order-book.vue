<script lang="ts" setup>
import { watch } from 'vue'
import { useOrderBook } from '../composables/useOrderBook'
import { useTradingPair } from '../composables/useTradingPair'
import UiTable from '../components/ui/table.vue'

const {
  asks,
  bids,
  listWithNumberOfTableItems,
  selectedNumberOfTableItems,
  fetchData,
} = useOrderBook()
const {
  selectedPair,
} = useTradingPair()

watch(selectedNumberOfTableItems, () => {
  fetchData(selectedPair.value)
}, { immediate: true })
</script>

<template>
  <div class="order-book">
    <h1>Selected pair: {{ selectedPair }}</h1>

    <v-combobox
      v-model="selectedNumberOfTableItems"
      label="Number of table items"
      :items="listWithNumberOfTableItems"
    />

    <div class="order-book__tables">
      <ui-table
        name="asks"
        text-color="red"
        :items="asks"
      />
      <ui-table
        name="bids"
        text-color="green"
        :items="bids"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
.order-book {
  width: 100%;

  &__tables {
    display: flex;
    gap: var(--spacer-d);
    max-height: calc(100vh - 350px);
    overflow-x: auto;
  }
}
</style>
