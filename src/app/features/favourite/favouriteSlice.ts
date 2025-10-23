// ** Hooks && Tools
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { getPharaohMartData } from "../../../utils/localStorage";



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
const data = getPharaohMartData();
const initialState: IFavouriteState = data && data.favourite
    ? data.favourite
    :
    {
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
        },
        removeProductFromFavourite: (state, action: PayloadAction<{
            productId: string,
            name: string,
            sellerName: string,
            quantity: number;
            price: number;
            imageUrl: string;
        }>)=>{
            state.products = state.products.filter(item => item.productId !== action.payload.productId);
        }
    }
})


export const { addProductToFavourite, removeProductFromFavourite } = FavouriteSlice.actions;
