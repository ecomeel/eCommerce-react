import React from "react";
import { FaBasketShopping } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

import "./menu.scss";

const setActive = ({ isActive }: { isActive: boolean }) =>
    isActive ? "menu__item menu__item_active" : "menu__item";

export const Menu: React.FC = (props: any) => {
    // function handleOpenCart(): void {
    //     const cartNode = document.getElementById("cart");
    //     cartNode?.classList.toggle("popup_active");
    // }

    return (
        <nav className="menu">
            <NavLink className={setActive} to="/">
                Продукты
            </NavLink>
            <NavLink className={setActive} to="/about">
                Про нас
            </NavLink>
            <NavLink className={setActive} to="/feedback">
                Контакты
            </NavLink>
            <NavLink className={setActive} to="/account">
                Кабинет
            </NavLink>
            <FaBasketShopping
                // onClick={handleOpenCart}
                onClick={() => props.handlerChangeCartVisible((visible: boolean) => !visible)}
                className="menu__item menu__item_cart"
            />
        </nav>
    );
};
