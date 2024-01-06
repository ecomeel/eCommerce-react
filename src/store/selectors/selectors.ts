import { useSelector } from "react-redux";
import { RootState } from "../store";

import { IProduct, IProductWithAmount } from "../../types/interfaces";

export const getProducts = (): IProduct[] =>
    useSelector((state: RootState) => state.products.items);

export const getCartItems = (): IProductWithAmount[] =>
    useSelector((state: RootState) => state.cart.items);

export const getCartCost = (): number => useSelector((state: RootState) => state.cart.cartCost)