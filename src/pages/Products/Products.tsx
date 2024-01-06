import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import { Product } from "../../components/Product/Product";
import { Loader } from "../../components/commons/Loader/Loader";

import { RootState } from "../../store/store";
import { setProducts } from "../../store/slices/productsSlice";
import { IProduct } from "../../types/interfaces";
import { getProductsFromDatabase } from "../../firebase/firebase";

import "./products.scss";

export const Products: React.FC = () => {
    const [loadingStatus, setLoadingStatus] = useState({
        isLoading: false,
        isLoadingSuccess: false,
        isLoadingError: false,
    });

    const dispatch = useDispatch();
    useEffect(() => {
        setLoadingStatus({
            ...loadingStatus,
            isLoading: true,
            isLoadingError: false,
            isLoadingSuccess: false,
        });
        getProductsFromDatabase()
            .then((response) => {
                dispatch(setProducts(response));
                setLoadingStatus({
                    ...loadingStatus,
                    isLoadingSuccess: true,
                    isLoading: false,
                });
            })
            .catch(() => {
                console.log("error loading");
                setLoadingStatus({
                    ...loadingStatus,
                    isLoadingError: true,
                    isLoading: false,
                });
            });
    }, []);

    const products = useSelector((state: RootState) => state.products.items);

    return (
        <main className="products">
            <div className="products__banner"></div>
            {loadingStatus.isLoading && <Loader />}
            {loadingStatus.isLoadingError && (
                <p>Loading error. Try again later!</p>
            )}
            {loadingStatus.isLoadingSuccess && (
                <div className="products__list">
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
                </div>
            )}
        </main>
    );
};
