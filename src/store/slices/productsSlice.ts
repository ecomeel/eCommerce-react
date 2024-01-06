import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { IProduct } from "../../types/interfaces";

interface IProducts {
    items: IProduct[]
}

const initialState: IProducts = {
    items: []
}

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setProducts(state, action: PayloadAction<IProduct[]>) {
            state.items = action.payload
        }
    }
})

export const {setProducts} = productsSlice.actions;
export default productsSlice.reducer