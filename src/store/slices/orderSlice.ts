import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { IProductWithAmount, IAddress } from "../../types/interfaces";

interface IOrder {
    paytype: string;
    address: IAddress;
    order: IProductWithAmount[]
}

const initialState: IOrder = {
    paytype: '',
    address: {
        name: '',
        phone: '',
        email: '',
        address: ''
    },
    order: []
}

const orderSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {
        setNewAddress(state, action: PayloadAction<IAddress>) {
            state.address = action.payload
        },
        setPaytype(state, action: PayloadAction<string>) {
            state.paytype = action.payload
        },
        setOrder(state, action: PayloadAction<IProductWithAmount[]>) {
            state.order = action.payload
        }
    }
})

export const { setNewAddress, setPaytype, setOrder } = orderSlice.actions;
export default orderSlice.reducer