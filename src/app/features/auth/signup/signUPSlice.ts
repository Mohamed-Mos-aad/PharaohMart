// ** Hooks && Tools
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
// ** Interfaces
import type { ISignUpData } from "../../../../interfaces";



// ** Interfaces
interface ISignUpState{
    userType: 'seller' | 'customer';
    userData: ISignUpData | null;
}



// ** Default
const initialState : ISignUpState = {
    userType: "customer",
    userData: null
}



// ** Slice
export const SignUPSlice = createSlice({
    name: 'signUp',
    initialState,
    reducers: {
        changeSignUpUserType: (state, action:PayloadAction<'seller' | 'customer'>)=>{
            state.userType = action.payload
        },
        pushUserData: (state, action:PayloadAction<ISignUpData>)=>{
            state.userData = action.payload
        },
    }
})



// ** Export
export const { changeSignUpUserType, pushUserData } = SignUPSlice.actions;