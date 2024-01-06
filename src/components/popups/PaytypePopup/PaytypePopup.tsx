import React from "react";
import { useDispatch } from "react-redux";

import { Button } from "components/Button/Button";
import {
    changeVisibilityPopup,
    getSelectedOptionValue,
    isPaytypeValid,
} from "utils/utils";
import { setPaytype } from "store/slices/orderSlice";

export const PaytypePopup: React.FC = () => {
    const dispatch = useDispatch();

    function handleSavePaytype(): void {
        const paytype = getSelectedOptionValue(".paytype__input");

        if (!isPaytypeValid(paytype)) return;

        dispatch(setPaytype(paytype));
        changeVisibilityPopup("paytypePopup");
    }
    return (
        <div id="paytypePopup" className="paytype-popup popup">
            <div className="popup__content">
                <button
                    className="popup__close-btn"
                    onClick={() => changeVisibilityPopup("paytypePopup")}
                >
                    X
                </button>
                <h2>Выберите тип оплаты</h2>
                <label className="popup__label" htmlFor="paytypeCard">
                    <input
                        className="paytype__input"
                        type="radio"
                        id="paytypeCard"
                        value="card"
                        name="paytype"
                    />
                    Картой
                </label>
                <label className="popup__label" htmlFor="paytypeCash">
                    <input
                        className="paytype__input"
                        type="radio"
                        value="cash"
                        id="paytypeCash"
                        name="paytype"
                    />
                    Наличными
                </label>
                <Button title="Сохранить" handleClick={handleSavePaytype} />
            </div>
        </div>
    );
};
