import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";

import { isInputsEmpty, changeVisibilityPopup } from "utils/utils";
import { setNewAddress } from "store/slices/orderSlice";
import { Button } from "components/Button/Button";

export const AddressPopup: React.FC = () => {
    const dispatch = useDispatch();
    const [address, setAddress] = useState({
        name: "",
        phone: "",
        email: "",
        address: "",
    });
    function handleInputChanged(e: React.ChangeEvent<HTMLInputElement>): void {
        setAddress({
            ...address,
            [e.target.name]: e.target.value,
        });
    }

    function handleSaveAddress(): void {
        if (isInputsEmpty(".popup__input")) return;
        dispatch(setNewAddress(address));
        changeVisibilityPopup("addressPopup");
    }

    return (
        <div id="addressPopup" className="address-popup popup">
            <div className="popup__content">
                <button
                    className="popup__close-btn"
                    onClick={() => changeVisibilityPopup("addressPopup")}
                >
                    X
                </button>
                <input
                    className="popup__input"
                    value={address.name}
                    onChange={handleInputChanged}
                    name="name"
                    type="text"
                    placeholder="Name"
                />
                <input
                    className="popup__input"
                    value={address.phone}
                    onChange={handleInputChanged}
                    name="phone"
                    type="tel"
                    placeholder="phone"
                />
                <input
                    className="popup__input"
                    value={address.email}
                    onChange={handleInputChanged}
                    name="email"
                    type="email"
                    placeholder="mail"
                />
                <input
                    className="popup__input"
                    value={address.address}
                    onChange={handleInputChanged}
                    name="address"
                    type="address"
                    placeholder="Address"
                />
                <Button title="Сохранить" handleClick={handleSaveAddress} />
            </div>
        </div>
    );
};
