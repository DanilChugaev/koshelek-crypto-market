import { ref } from 'vue'
import { useFetch, useStorage } from '@vueuse/core'
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

const connection = ref(null)

const orderBook = ref(null)
const asks = ref({})
const bids = ref({})

export function useOrderBook() {
  const selectedNumberOfTableItems = useStorage<NumberOfTableItems>('selectedNumberOfTableItems', 100)

  const listWithNumberOfTableItems = ref<NumberOfTableItems[]>([100, 500, 1000])

  const clearOldData = () => {
    asks.value = {}
    bids.value = {}
  }

  const getDataObj = (arr: number[]) => ({
    price: arr[0],
    quantity: arr[1],
    total: arr[0] * arr[1],
  })

  const getReducedData = (acc, current) => ({
    ...acc,
    [current[0]]: getDataObj(current),
  })

  const fetchInitialData = async (selectedPair) => {
    const { data } = await useFetch(getRestApiUrl({
      symbol: selectedPair,
      limit: selectedNumberOfTableItems.value,
    })).json()

    asks.value = data.value.asks.reduce(getReducedData, {})
    bids.value = data.value.bids.reduce(getReducedData, {})
  }

  function handleOrders(book, order) {
    if (book.value[order[0]]) {
      if (Number(order[1]) !== 0) {
        book.value[order[0]].quantity = order[1]
        book.value[order[0]].total = order[0] * order[1]
      }
      else {
        delete book.value[order[0]]
      }
    }
    else {
      if (Number(order[1]) !== 0)
        book.value[order[0]] = getDataObj(order)
    }
  }

  const handleWebSocketMessage = (event) => {
    orderBook.value = JSON.parse(event.data)

    orderBook.value.a.forEach(handleOrders.bind(null, asks))
    orderBook.value.b.forEach(handleOrders.bind(null, bids))

    // фильтровать по цене надо
  }

  const connectToWebSocket = (selectedPair) => {
    connection.value = new WebSocket(getWebSocketUrl(selectedPair))
    // закрывать старое соединение надо перед открытие нового

    /* eslint-disable no-console */
    connection.value.onopen = () => console.log('WebSocket connection established')
    connection.value.onclose = () => console.log('WebSocket connection closed')
    connection.value.onerror = error => console.log(`WebSocket error: ${error}`)
    /* eslint-enable no-console */

    connection.value.onmessage = handleWebSocketMessage
  }

  const fetchData = async (selectedPair) => {
    clearOldData()
    await fetchInitialData(selectedPair)
    connectToWebSocket(selectedPair)
  }

  return {
    asks,
    bids,
    listWithNumberOfTableItems,
    selectedNumberOfTableItems,
    fetchInitialData,
    connectToWebSocket,
    fetchData,
  }
}
