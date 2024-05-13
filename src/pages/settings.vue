<script lang="ts" setup>
import { useTradingPair } from '../composables/useTradingPair'

const {
  pairs,
  selectedPair,
} = useTradingPair()
</script>

<template>
  <div class="settings">
    <v-combobox
      v-model="selectedPair"
      label="Select trading pair"
      :items="pairs"
    />
  </div>
</template>

<style scoped lang="scss">
.settings {
  width: 100%;
}
</style>
