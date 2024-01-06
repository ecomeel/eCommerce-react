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
            {paytype ? (
                <p>
                    {paytype == "card"
                        ? "Оплата картой при получении"
                        : "Оплата наличными при получении"}
                </p>
            ) : (
                <p>Способ оплаты не выбран</p>
            )}
            <Button
                title="Изменить"
                handleClick={() => changeVisibilityPopup("paytypePopup")}
            />
        </div>
    );
};
