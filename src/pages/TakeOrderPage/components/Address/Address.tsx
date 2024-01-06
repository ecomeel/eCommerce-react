import React from "react";

import { Button } from "../../../../components/Button/Button";
import { changeVisibilityPopup } from "../../../../utils/utils";
import "./address.scss";
import { getOrderAddress } from "../../../../store/selectors/selectors";

export const Address: React.FC = () => {
    const address = getOrderAddress();
    return (
        <div className="address">
            <h2 className="address__title">Заполните данные для заказа</h2>
            {!address.name ? (
                <p>Адресс не указан</p>
            ) : (
                <div className="address__data">
                    <p>Name: {address.name}</p>
                    <p>Phone: {address.phone}</p>
                    <p>Email: {address.email}</p>
                    <p>Address: {address.address}</p>
                </div>
            )}
            <Button
                title="Изменить"
                handleClick={() => changeVisibilityPopup("addressPopup")}
            />
        </div>
    );
};
