// ** Hooks && Tools
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
// ** Interfaces
import type { ISignUpData } from "../../../../interfaces";



// ** Interfaces
interface ISignUpState{
    userType: 'seller' | 'buyer';
    userData: ISignUpData | null;
}



// ** Default
const initialState : ISignUpState = {
    userType: "buyer",
    userData: null
}



// ** Slice
export const LogInSlice = createSlice({
    name: 'logIn',
    initialState,
    reducers: {
        changeLogInUserType: (state, action:PayloadAction<'seller' | 'buyer'>)=>{
            state.userType = action.payload
        }
    }
})



// ** Export
export const { changeLogInUserType } = LogInSlice.actions;