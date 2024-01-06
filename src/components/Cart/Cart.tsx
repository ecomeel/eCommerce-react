import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import "./cart.scss";
import { deleteProductFromCart } from "../../store/slices/cartSlice";
import { getCartItems, getCartCost } from "../../store/selectors/selectors";

export const Cart: React.FC = () => {
    const cart = getCartItems();
    const cartCost = getCartCost();
    const dispatch = useDispatch()

    return (
        <div id="cart" className="cart">
            {cart.length == 0 ? (
                <p className="cart__title">Корзина пуста</p>
            ) : (
                <>
                    <h2 className="cart__title">Корзина</h2>
                    <ul className="cart__list">
                        {cart.map((item) => (
                            <li className="cart__item item-cart" key={item.id}>
                                <img className="item-cart__image" src={`./img/products/${item.img}`} alt="" />
                                <div className="item-cart__text-wrapper">
                                  <h3 className="item-cart__title">
                                      {item.title}
                                  </h3>
                                  <p className="item-cart__price-wrapper">
                                      <span className="item-cart__price">{item.price}$ </span>
                                      x
                                      <span className="item-cart__amount"> {item.amount}</span>
                                  </p>
                                  <button className="item-cart__delete-item" onClick={() => dispatch(deleteProductFromCart(item.id))}>X</button>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <p className="cart__cost">Стоимость корзины: {cartCost}</p>
                    <Link className="cart__go-take-order" to='/takeorder'>Сделать заказ</Link>
                </>
            )}
        </div>
    );
};
