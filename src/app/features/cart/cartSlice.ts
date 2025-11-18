// ** Hooks && Tools
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { getPharaohMartData } from "../../../utils/localStorage";



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
const data = getPharaohMartData();
const initialState: ICartState = data && data.cart
    ? data.cart
    :
    {
        products: [],
        totalAmount: 0,
        itemCount: 0,
    };



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
        removeProductFromCart: (state, action: PayloadAction<{
            productId: string,
            name: string,
            sellerName: string,
            quantity: number;
            price: number;
            imageUrl: string;
        }>)=>{
            state.products = state.products.filter(item => item.productId !== action.payload.productId);
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


export const { addProductToCart, updateQuantity, removeProductFromCart } = CartSlice.actions;