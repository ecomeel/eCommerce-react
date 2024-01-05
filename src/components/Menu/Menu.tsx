import React from "react";

import './menu.scss'

export const Menu: React.FC = () => {
    return (
        <ul className="menu">
            <li className="menu__item">Про нас</li>
            <li className="menu__item">Контакты</li>
            <li className="menu__item">Кабинет</li>
        </ul>
    );
};
