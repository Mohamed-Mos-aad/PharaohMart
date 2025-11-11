// ** Hooks && Tools
import { configureStore } from '@reduxjs/toolkit'
import { setPharaohMartData } from '../utils/localStorage';
// ** Slices
import { CartSlice } from './features/cart/cartSlice'
import { FavouriteSlice } from './features/favourite/favouriteSlice'
import { SignUPSlice } from './features/auth/signup/signUPSlice';
import { LogInSlice } from './features/auth/logIn/logInSlice';



export const store = configureStore({
    reducer: {
        cart: CartSlice.reducer,
        favourite: FavouriteSlice.reducer,
        signUp: SignUPSlice.reducer,
        logIn: LogInSlice.reducer
    },
})



store.subscribe(() => {
    const state = store.getState();
    setPharaohMartData("cart", state.cart);
    setPharaohMartData("favourite", state.favourite);
});



export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch