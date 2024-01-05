import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import { RootState } from "../../store/store";
import { Product } from "../Product/Product";
import { setProducts } from "../../store/slices/productsSlice";
import { IProduct } from "../../types/interfaces";
import { getProductsFromDatabase } from "../../firebase/firebase";
import "./products.scss";
// import { RootState } from "@reduxjs/toolkit/query";

export const Products: React.FC = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        getProductsFromDatabase().then(response => {
            dispatch(setProducts(response))
        });
    }, []);


    const products = useSelector((state: RootState) => state.products.items)

    return (
        <main className="products">
            {products.map((product: IProduct) => (
                <Product
                    key={product.id}

                    id={product.id}
                    title={product.title}
                    img={product.img}
                    desc={product.desc}
                    category={product.category}
                    price={product.price}
                />
            ))}
        </main>
    );
};
