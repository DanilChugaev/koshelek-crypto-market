export type TradingPair = 'BTCUSDT' | 'BNBBTC' | 'ETHBTC'

export interface ITradingPairLog {
  oldValue: TradingPair
  newValue: TradingPair
  dateTime: string
}
