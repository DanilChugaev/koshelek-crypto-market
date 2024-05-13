<script lang="ts" setup>
import { useTradingPair } from '../composables/useTradingPair'

const {
  pairs,
  selectedPair,
  tradingPairSelectionLog,
} = useTradingPair()
</script>

<template>
  <div class="settings">
    <v-combobox
      v-model="selectedPair"
      label="Select trading pair"
      :items="pairs"
    />

    <v-list>
      <v-list-subheader>LOGS</v-list-subheader>

      <template v-if="tradingPairSelectionLog.length">
        <v-list-item
          v-for="item in tradingPairSelectionLog"
          :key="item.dateTime"
          :title="item.dateTime"
          :subtitle="`Trading pair ${item.oldValue} was changed to ${item.newValue} at ${item.dateTime}`"
        />
      </template>

      <template v-else>
        <v-list-subheader>LOGS ARE EMPTY NOW</v-list-subheader>
      </template>
    </v-list>
  </div>
</template>

<style scoped lang="scss">
.settings {
  width: 100%;
}
</style>
