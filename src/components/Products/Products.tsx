import React from "react";

import { Product } from "../Product/Product";

import { IProduct } from "../../types/interfaces";

import "./products.scss";

export const Products: React.FC = () => {
    const products: IProduct[] = [
        {
            id: 1,
            title: "Gray chair",
            img: "chair-grey.jpeg",
            desc: "Lorem, ipsum dolor sit amet consectetur adipisicing.",
            category: "chairs",
            price: "49.99",
        },
        {
            id: 2,
            title: "White chair",
            img: "chair-white.jpeg",
            desc: "Lorem, ipsum dolor sit amet consectetur adipisicing.",
            category: "chairs",
            price: "49.99",
        },
        {
            id: 3,
            title: "Sofa",
            img: "sofa.jpeg",
            desc: "Lorem, ipsum dolor sit amet consectetur adipisicing.",
            category: "sofas",
            price: "100",
        },
        {
            id: 4,
            title: "Table",
            img: "table.webp",
            desc: "Lorem, ipsum dolor sit amet consectetur adipisicing.",
            category: "tables",
            price: "85.99",
        },
        {
            id: 5,
            title: "Wall Lights",
            img: "wall-light.jpeg",
            desc: "Lorem, ipsum dolor sit amet consectetur adipisicing.",
            category: "lamps",
            price: "49.99",
        },
    ]

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
