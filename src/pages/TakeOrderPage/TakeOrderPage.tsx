import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { Button } from "../../components/Button/Button";
import { Address } from "./components/Address/Address";
import { Paytype } from "./components/Paytype/Paytype";
import {
    getCartCost,
    getCartItems,
    getOrderAddress,
    getOrderPaytype,
} from "../../store/selectors/selectors";
import { isValidOrder } from "../../utils/utils";
import { setOrder } from "../../store/slices/orderSlice";
import "./take-order-page.scss";

export const TakeOrderPage: React.FC = () => {
    const dispatch = useDispatch();
    const cart = getCartItems();
    const orderCost = getCartCost();
    const paytype = getOrderPaytype();
    const address = getOrderAddress();
    const navigate = useNavigate();

    function handleTakeOrder(): void {
        if (!isValidOrder(paytype, address, cart)) return;
        dispatch(setOrder(cart));
        alert("Спасибо за заказ! С вами свяжутся в ближайшее время.");
        navigate("/");
    }

    return (
        <div className="take-order">
            <h1 className="take-order__title">Сделать заказ</h1>
            <Address />
            <Paytype />
            <p className="take-order__cost">Стоимость заказа: {orderCost}</p>
            <Button title="Сделать заказ" handleClick={handleTakeOrder} />
            <h2 className="order__title">Заказ: </h2>
            <ul className="order">
                {cart.map((item) => (
                    <li className="order__item" key={item.id}>
                        <img
                            className="order__image"
                            src={`./img/products/${item.img}`}
                            alt=""
                        />
                        <div className="order__text-wrapper">
                            <h3 className="order__subtitle">{item.title}</h3>
                            <p className="order__desc">{item.desc}</p>
                            <p className="order__price-wrapper">
                                <span className="order__price">
                                    {item.price}{" "}
                                </span>
                                x
                                <span className="order__amount">
                                    {" "}
                                    {item.amount}
                                </span>
                            </p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};
