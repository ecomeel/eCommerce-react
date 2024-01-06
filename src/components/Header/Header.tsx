import React from "react";

import { Menu } from "../Menu/Menu";
import { Cart } from "../Cart/Cart";

import "./header.scss";

export const Header: React.FC = () => {

    return (
        <header className="header">
            <div className="header__logo-wrapper">
                <span className="header__logo"> House Staff</span>
                <Menu />
            </div>
            <Cart />
        </header>
    );
};
