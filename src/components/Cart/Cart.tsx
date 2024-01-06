import React from "react";

import "./cart.scss";
import { getCartItems, getCartCost } from "../../store/selectors/selectors";

export const Cart: React.FC = () => {
    const cart = getCartItems();
    const cartCost = getCartCost();

    return (
        <div id="cart" className="cart">
            {cart.length == 0 ? (
                <p className="cart__title">Корзина пуста</p>
            ) : (
                <>
                    <h2 className="cart__title">Корзина</h2>
                    <ul>
                        {cart.map((item) => (
                            <li key={item.id}>
                                <h3>{item.title}</h3>
                                <p>{item.price}</p>
                                <p>{item.amount}</p>
                                <p>Стоимость корзины: {cartCost}</p>
                            </li>
                        ))}
                    </ul>
                </>
            )}
        </div>
    );
};
