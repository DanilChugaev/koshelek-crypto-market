<script lang="ts" setup>
import { onMounted } from 'vue'
import { useOrderBook } from '../composables/useOrderBook'
import { useTradingPair } from '../composables/useTradingPair'

const {
  asks,
  bids,
  // orderBook,
  listWithNumberOfTableItems,
  selectedNumberOfTableItems,
  fetchData,
} = useOrderBook()
const {
  selectedPair,
} = useTradingPair()

onMounted(() => {
  fetchData(selectedPair.value)
})
</script>

<template>
  <div class="order-book">
    <v-combobox
      v-model="selectedNumberOfTableItems"
      label="Number of table items"
      :items="listWithNumberOfTableItems"
    />

    asks - {{ asks }}
    <br>
    bids - {{ bids }}
    <div>
      ====
    </div>
    <!--    {{ orderBook }} -->
  </div>
</template>

<style scoped lang="scss">
.order-book {
  width: 100%;
}
</style>
