import { ref } from 'vue'
import { useFetch, useStorage, useWebSocket } from '@vueuse/core'
import type { TradingPair } from '../types/tradingPair'
import type { NumberOfTableItems } from '../types/orderBook'

function getRestApiUrl({
  symbol,
  limit,
}: {
  symbol: TradingPair
  limit: NumberOfTableItems
}) {
  return `https://api.binance.com/api/v3/depth?symbol=${symbol}&limit=${limit}`
}

const getWebSocketUrl = (symbol: TradingPair) => `wss://stream.binance.com:9443/ws/${symbol.toLowerCase()}@depth`

const orderBook = ref(null)
const asks = ref([])
const bids = ref([])
const closeLastConnectionFn = ref(null)

export function useOrderBook() {
  const selectedNumberOfTableItems = useStorage<NumberOfTableItems>('selectedNumberOfTableItems', 100)

  const listWithNumberOfTableItems = ref<NumberOfTableItems[]>([100, 500, 1000])

  const fetchInitialData = async (selectedPair) => {
    const { data } = await useFetch(getRestApiUrl({
      symbol: selectedPair,
      limit: selectedNumberOfTableItems.value,
    })).json()

    asks.value = data.value.asks
    bids.value = data.value.bids
  }

  const connectToWebSocket = (selectedPair) => {
    const { data, close } = useWebSocket(getWebSocketUrl(selectedPair), {
      autoReconnect: true,
    })

    orderBook.value = data
    closeLastConnectionFn.value = close
  }

  const fetchData = (selectedPair) => {
    closeLastConnectionFn.value?.()

    fetchInitialData(selectedPair)
    connectToWebSocket(selectedPair)
  }

  return {
    asks,
    bids,
    orderBook,
    listWithNumberOfTableItems,
    selectedNumberOfTableItems,
    fetchInitialData,
    connectToWebSocket,
    fetchData,
  }
}
