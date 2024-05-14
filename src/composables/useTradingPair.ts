import { ref, watch } from 'vue'
import { useDateFormat, useNow, useStorage } from '@vueuse/core'
import type { ITradingPairLog, TradingPair } from '../types/tradingPair'
import { useOrderBook } from './useOrderBook'

export function useTradingPair() {
  const selectedPair = useStorage<TradingPair>('selectedPair', 'BTCUSDT')
  const tradingPairSelectionLog = useStorage<ITradingPairLog[]>('tradingPairSelectionLog', [])
  const { fetchData } = useOrderBook()

  const pairs = ref<TradingPair[]>(['BTCUSDT', 'BNBBTC', 'ETHBTC'])

  const updateLog = ({ oldValue, newValue }: { oldValue: TradingPair, newValue: TradingPair }) => {
    const currentDateTime = useDateFormat(useNow(), 'DD.MM.YYYY HH:mm:ss')

    tradingPairSelectionLog.value.push({
      oldValue,
      newValue,
      dateTime: currentDateTime.value,
    })
  }

  watch(selectedPair, async (newValue: TradingPair, oldValue: TradingPair) => {
    updateLog({ oldValue, newValue })
    await fetchData(newValue)
  })

  return {
    pairs,
    selectedPair,
    tradingPairSelectionLog,
  }
}
