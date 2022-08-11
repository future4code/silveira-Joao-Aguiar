
export interface Pizza {
    name: string
    price: number
    ingredients: string[]
}

export interface OrderItem {
    pizza: Pizza
    amount: number
}

export interface Order {
    item: OrderItem
}