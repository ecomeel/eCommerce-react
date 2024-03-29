import React from "react";
import { useDispatch } from "react-redux";

import { Button } from "components/Button/Button";

import "./product.scss";
import { IProduct } from "types/interfaces";
import { addProductToCard } from "store/slices/cartSlice";

export const Product: React.FC<IProduct> = (props: IProduct) => {
    const { title, img, desc, price } = { ...props };
    const dispatch = useDispatch();

    return (
        <div className="product">
            <img
                className="product__image"
                src={`./img/products/${img}`}
                alt={title}
            />
            <div className="product__text-wrapper">
                <h3 className="product__title">{title}</h3>
                <p className="product__desc">{desc}</p>
                <div className="product__price-wrapper">
                    <Button
                        handleClick={() => dispatch(addProductToCard(props))}
                        title="Add to Cart"
                    />
                    <p className="product__price">{price} $</p>
                </div>
            </div>
        </div>
    );
};
