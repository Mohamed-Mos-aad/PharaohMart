// ** Hooks && Tools
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";



// ** Interfaces
interface ICartState{
    products: Array<{
        productId: string,
        name: string,
        sellerName: string,
        quantity: number;
        price: number;
        imageUrl: string;
    }>;
    totalAmount: number;
    itemCount: number;
}



// ** Default
const initialState: ICartState = {
    products: [],
    totalAmount: 0,
    itemCount: 0
}



// ** Slice
export const CartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addProductToCart: (state, action: PayloadAction<{
            productId: string,
            name: string,
            sellerName: string,
            quantity: number;
            price: number;
            imageUrl: string;
        }>) => {
            state.products.push(action.payload)
            state.itemCount += action.payload.quantity
            state.totalAmount += action.payload.price * action.payload.quantity
        },
        updateQuantity: (state, action: PayloadAction<{ productId: string; quantity: number }>) =>{
            const product = state.products.find(p => p.productId === action.payload.productId);
            if(product){
                product.quantity = action.payload.quantity;
                state.itemCount = state.products.reduce((total, item) => total + item.quantity, 0);
                state.totalAmount = state.products.reduce((total, item) => total + (item.price * item.quantity), 0);
            }
        }
    }
})


export const { addProductToCart, updateQuantity } = CartSlice.actions;
