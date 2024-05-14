export type NumberOfTableItems = 100 | 500 | 1000

export interface IOrderBook {
  [key: number]: {
    price: number
    quantity: number
    total: number
  }
}
