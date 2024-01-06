import React from "react";
import { FaBasketShopping } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

import "./menu.scss";

const setActive = ({ isActive }: { isActive: boolean }) =>
    isActive ? "menu__item menu__item_active" : "menu__item";

export const Menu: React.FC = () => {
    function handleOpenCart():void {
        const cartNode = document.getElementById('cart');
        cartNode?.classList.toggle('popup_active')
    }

    return (
        <nav className="menu">
            <NavLink className={setActive} to="/products">
                Продукты
            </NavLink>
            <NavLink className={setActive} to="">
                Про нас
            </NavLink>
            <NavLink className={setActive} to="">
                Контакты
            </NavLink>
            <NavLink className={setActive} to="">
                Кабинет
            </NavLink>
            {/* <NavLink className={setActive} to="/cart"> */}
                <FaBasketShopping onClick={handleOpenCart} className="menu__item menu__item_cart" />
            {/* </NavLink> */}
        </nav>
    );
};
