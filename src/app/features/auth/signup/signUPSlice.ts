// ** Hooks && Tools
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
// ** Interfaces
import type { ISignUpData } from "../../../../interfaces";



// ** Interfaces
interface ISignUpState{
    userType: 'seller' | 'Buyer';
    userData: ISignUpData | null;
}



// ** Default
const initialState : ISignUpState = {
    userType: "Buyer",
    userData: null
}



// ** Slice
export const SignUPSlice = createSlice({
    name: 'signUp',
    initialState,
    reducers: {
        changeSignUpUserType: (state, action:PayloadAction<'seller' | 'Buyer'>)=>{
            state.userType = action.payload
        },
        pushUserData: (state, action:PayloadAction<ISignUpData>)=>{
            state.userData = action.payload
        },
    }
})



// ** Export
export const { changeSignUpUserType, pushUserData } = SignUPSlice.actions;