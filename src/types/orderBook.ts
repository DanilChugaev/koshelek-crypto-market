export type NumberOfTableItems = 100 | 500 | 1000

export type OrderItem = string
export type Order = OrderItem[]

export interface IOrderBook {
  [key: OrderItem]: {
    price: OrderItem
    quantity: OrderItem
    total: number
  }
}
