// ** Hooks && Tools
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";



// ** Interfaces
interface ISignUpState{
    userType: 'seller' | 'user';
}



// ** Default
const initialState : ISignUpState = {
    userType: "user",
}



// ** Slice
export const SignUPSlice = createSlice({
    name: 'signUp',
    initialState,
    reducers: {
        changeSignUpUserType: (state, action:PayloadAction<'seller' | 'user'>)=>{
            state.userType = action.payload
        }
    }
})



// ** Export
export const { changeSignUpUserType } = SignUPSlice.actions;