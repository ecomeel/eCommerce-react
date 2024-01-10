import React from "react";

import { Menu } from "./menu/Menu";
import { Cart } from "./cart/Cart";

import "./header.scss";

export const Header: React.FC = () => {
    const [isCartVisible, setIsCartVisible] = React.useState(false);

    return (
        <header className="header">
            <div className="header__logo-wrapper">
                <span className="header__logo"> House Staff</span>
                <Menu handlerChangeCartVisible={setIsCartVisible} />
            </div>
            {isCartVisible && <Cart />}
        </header>
    );
};
