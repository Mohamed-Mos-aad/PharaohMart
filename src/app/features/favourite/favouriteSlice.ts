// ** Hooks && Tools
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";



// ** Interfaces
interface IFavouriteState{
    products: Array<{
        productId: string,
        name: string,
        sellerName: string,
        quantity: number;
        price: number;
        imageUrl: string;
    }>;
}



// ** Default
const initialState: IFavouriteState = {
    products: []
}



// ** Slice
export const FavouriteSlice = createSlice({
    name: 'favourite',
    initialState,
    reducers: {
        addProductToFavourite: (state, action: PayloadAction<{
            productId: string,
            name: string,
            sellerName: string,
            quantity: number;
            price: number;
            imageUrl: string;
        }>) => {
            state.products.push(action.payload)
        }
    }
})


export const { addProductToFavourite } = FavouriteSlice.actions;
