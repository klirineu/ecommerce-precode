export type ProductFetch = {
    products: ProductItem[],
    isLoading: boolean;
    isError: boolean;
}

export type Attributes = {
    title: string;
    link_image: string;
    description: string;
    price: number;
}

export type ProductItem = {
    id: number;
    attributes: Attributes;
    amount: number;
}

export type CartItem = {
    id?: number;
    attributes: Attributes;
    amount: number;
}

export type CartActionReducer = {
    payload: any;
    type: 'ADD' | 'REMOVE' | 'REMOVE-ALL' | 'CLEAR';
}

export type CartContextType = {
    cartItems: CartItem[],
    dispatch: React.Dispatch<CartActionReducer>
}

export type Customer = {
    name: string;
    lastName: string;
    email: string;
    address: string;
}

export type Order = {
    customer: Customer,
    order_details: CartItem[]
}