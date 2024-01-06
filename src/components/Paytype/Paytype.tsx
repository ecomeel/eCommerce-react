import React from "react";

import { Button } from "../commons/Button/Button";
import { changeVisibilityPopup } from "../../utils/utils";
import { getOrderPaytype } from "../../store/selectors/selectors";
import "./paytype.scss";

export const Paytype: React.FC = () => {
    const paytype = getOrderPaytype();
    return (
        <div className="paytype">
            <h2 className="paytype__title">Способ оплаты: </h2>
            <p>
                {!paytype
                    ? "Способ оплаты не выбран"
                    : paytype == "card"
                    ? "Оплата картой при получении"
                    : "Оплата наличными при получении"}
            </p>

            <Button
                title="Изменить"
                handleClick={() => changeVisibilityPopup("paytypePopup")}
            />
        </div>
    );
};
