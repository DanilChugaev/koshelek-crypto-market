import { ref, watch } from 'vue'
import { useDateFormat, useNow, useStorage } from '@vueuse/core'
import type { TradingPair } from '../types/tradingPair'

export function useTradingPair() {
  const selectedPair = useStorage<TradingPair>('selectedPair', 'BTCUSDT')
  const tradingPairSelectionLog = useStorage<string[]>('tradingPairSelectionLog', [])

  const pairs = ref<TradingPair[]>(['BTCUSDT', 'BNBBTC', 'ETHBTC'])

  const updateLog = ({ oldValue, newValue }) => {
    const currentDateTime = useDateFormat(useNow(), 'DD.MM.YYYY HH:mm:ss')

    tradingPairSelectionLog.value.push({
      oldValue,
      newValue,
      dateTime: currentDateTime.value,
    })
  }

  watch(selectedPair, (newValue, oldValue) => {
    updateLog({ oldValue, newValue })
  })

  return {
    pairs,
    selectedPair,
    tradingPairSelectionLog,
  }
}
