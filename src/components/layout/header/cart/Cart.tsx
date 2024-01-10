import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import "./cart.scss";
import { deleteProductFromCart } from "../../../../store/slices/cartSlice";
import {
    getCartItems,
    getCartCost,
} from "../../../../store/selectors/selectors";

export const Cart: React.FC = () => {
    const cart = getCartItems();
    const cartCost = getCartCost();
    const dispatch = useDispatch();
    const cartRef = useRef(null);


    // useEffect(() => {
    //     const cartNode = cartRef.current! as HTMLElement;

    //     if (!cartNode.classList.contains('popup_active')) return

    //     function handleClickOutSide(event: MouseEvent) {
    //         const cartNode = cartRef.current! as HTMLElement;
    //         const elem = event.target as HTMLElement;
    //         console.log(elem)
    //         console.log(cartNode)
    
    //         if (cartNode && !cartNode.contains(elem)) {
    //             handleCloseCart();

    //         }
    //     }

    //     document.addEventListener("click", handleClickOutSide);
    //     return () => {
    //         document.removeEventListener("click", handleClickOutSide);
    //     };
        
    // }, []);

    useEffect(() => {
        console.log('Cart Did mount')
        console.log(cartRef.current)
    }, []);

    // Удалить функция
    function handleCloseCart(): void {
        const cartNode = document.getElementById("cart");
        cartNode?.classList.remove("popup_active");
    }

    return (
        <div id="cart" className="cart popup_active">
            {cart.length == 0 ? (
                <p className="cart__title">Корзина пуста</p>
            ) : (
                <>
                    <h2 className="cart__title">Корзина</h2>
                    <ul className="cart__list">
                        {cart.map((item) => (
                            <li className="cart__item item-cart" key={item.id}>
                                <img
                                    className="item-cart__image"
                                    src={`./img/products/${item.img}`}
                                    alt=""
                                />
                                <div className="item-cart__text-wrapper">
                                    <h3 className="item-cart__title">
                                        {item.title}
                                    </h3>
                                    <p className="item-cart__price-wrapper">
                                        <span className="item-cart__price">
                                            {item.price}${" "}
                                        </span>
                                        x
                                        <span className="item-cart__amount">
                                            {" "}
                                            {item.amount}
                                        </span>
                                    </p>
                                    <button
                                        className="item-cart__delete-item"
                                        onClick={() =>
                                            dispatch(
                                                deleteProductFromCart(item.id)
                                            )
                                        }
                                    >
                                        X
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <p className="cart__cost">Стоимость корзины: {cartCost}</p>
                    <Link
                        onClick={handleCloseCart}
                        className="cart__go-take-order"
                        to="/takeorder"
                    >
                        Сделать заказ
                    </Link>
                </>
            )}
        </div>
    );
};
