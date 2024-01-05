import React from "react";

import { Button } from "../commons/Button/Button";

import './product.scss'
import { IProduct } from "../../types/interfaces";

export const Product: React.FC<IProduct> = (props: IProduct) => {
    const {title, img, desc, price} = {...props};

    return (
        <div className="product">
            <img className="product__image" src={`./img/products/${img}`} alt={title} />
            <div className="product__text-wrapper">
                <h3 className="product__title">{title}</h3>
                <p className="product__desc">{desc}</p>
                {/* <p className="product__category">{category}</p> */}
                <div className="product__price-wrapper">
                    <Button title='Add to Cart' />
                    <p className="product__price">{price} $</p>
                </div>

            </div>
        </div>
    )
};
