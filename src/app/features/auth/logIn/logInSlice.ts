// ** Hooks && Tools
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
// ** Interfaces
import type { ISignUpData } from "../../../../interfaces";



// ** Interfaces
interface ISignUpState{
    roleType: 'seller' | 'customer';
    userData: ISignUpData | null;
}



// ** Default
const initialState : ISignUpState = {
    roleType: "customer",
    userData: null
}



// ** Slice
export const LogInSlice = createSlice({
    name: 'logIn',
    initialState,
    reducers: {
        changeLogInUserType: (state, action:PayloadAction<'seller' | 'customer'>)=>{
            state.roleType = action.payload
        }
    }
})



// ** Export
export const { changeLogInUserType } = LogInSlice.actions;