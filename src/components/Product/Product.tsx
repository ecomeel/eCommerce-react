import React from "react";

import { IProduct } from "../../types/interfaces";

export const Product: React.FC<IProduct> = (props: IProduct) => {
    const {title, desc, category, price} = {...props};

    return (
        <div className="product">
            <h3 className="product__title">{title}</h3>
            <img src='' alt={title} />
            <p className="product__desc">{desc}</p>
            <p className="product__price">{price}</p>
            <p className="product__category">{category}</p>
        </div>
    )
};
