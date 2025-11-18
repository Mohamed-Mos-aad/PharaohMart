// ** Hooks && Tools
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
// ** Interfaces
import type { IMessagePop } from "../../../interfaces";



// ** Default
const initialState: IMessagePop[] = [];



// ** Slice
export const MessagePopSlice = createSlice({
    name: 'messagePop',
    initialState,
    reducers: {
        successMsg: (state, action: PayloadAction<{message: string}>) =>{
            state.push({
                id: Date.now(),
                message: action.payload.message,
                success: true,
                show: true
            })
        },
        errorMsg: (state, action: PayloadAction<{message: string}>) =>{
            state.push({
                id: Date.now(),
                message: action.payload.message,
                success: false,
                show: true
            })
        },
        hideMessage: (state, action: PayloadAction<{ id: number }>) => {
            return state.filter((msg) => msg.id !== action.payload.id);
        }
    }
})



export const { successMsg, errorMsg, hideMessage } = MessagePopSlice.actions;