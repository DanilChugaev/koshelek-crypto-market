import { ref } from 'vue'
import { useStorage } from '@vueuse/core'
import type { TradingPair } from '../types/tradingPair'

export function useTradingPair() {
  const selectedPair = useStorage<TradingPair>('selectedPair', 'BTCUSDT')

  const pairs = ref<TradingPair[]>(['BTCUSDT', 'BNBBTC', 'ETHBTC'])

  return {
    pairs,
    selectedPair,
  }
}
