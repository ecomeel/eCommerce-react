import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { IProductWithAmount, IProduct } from "../../types/interfaces";

interface ICart {
    items: IProductWithAmount[];
    cartCost: number;
}
const initialState: ICart = {
    items: [],
    cartCost: 0,
};

function countCost(list: IProductWithAmount[]): number {
    let cost: number = 0;
    list.forEach((item: IProductWithAmount) => {
        cost += item.price * item.amount;
    });
    return Number(cost.toFixed(2))
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addProductToCard(state, action: PayloadAction<IProduct>) {
            const newItem: IProduct = action.payload;
            const findItem = state.items.find((item) => item.id == newItem.id);
            if (findItem) {
                findItem.amount += 1;
            } else {
                state.items.push({
                    ...newItem,
                    amount: 1,
                });
            }
            state.cartCost = countCost(state.items)
        },
        deleteProductFromCart(state, action: PayloadAction<string>) {
            state.items = state.items.filter(
                (item) => item.id != action.payload
            );
            state.cartCost = 0;
            state.items.forEach((item) => [
                (state.cartCost += item.price * item.amount),
            ]);
            state.cartCost = countCost(state.items)
        },
    },
});

export const { addProductToCard, deleteProductFromCart } = cartSlice.actions;
export default cartSlice.reducer;
