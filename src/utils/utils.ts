import { IAddress, IProductWithAmount } from "../types/interfaces";

export function isInputsEmpty(inputsClass: string): boolean {
    let isError = false;
    const inputNodes: NodeListOf<HTMLInputElement> =
        document.querySelectorAll(inputsClass);
    inputNodes.forEach((inputNode): void => {
        if (!inputNode.value) {
            inputNode.classList.add("red-border");
            isError = true;
        } else {
            inputNode.classList.remove("red-border");
        }
    });
    return isError;
}

export function changeVisibilityPopup(popupId: string) {
    const addressPopupNode = document.getElementById(popupId);
    document.body.classList.toggle("fixe-scroll");
    addressPopupNode?.classList.toggle("popup_active");
}

export function isValidOrder(
    paytype: string,
    address: IAddress,
    order: IProductWithAmount[]
): boolean {
    if (!paytype) {
        alert("Выберите тип оплаты");
        return false;
    }

    if (!address.name) {
        alert("Заполните данные для связи");
        return false;
    }

    if (order.length == 0) {
        alert("Пустой заказ!");
        return false;
    }
    return true;
}

export function getSelectedOptionValue(inputNodesClass: string): string {
    let selectedOptionValue = "";
    const inputsNodes: NodeListOf<HTMLInputElement> =
        document.querySelectorAll(inputNodesClass);
    inputsNodes.forEach((inputNode) => {
        if (inputNode.checked) selectedOptionValue = inputNode.value;
    });

    return selectedOptionValue;
}

export function isPaytypeValid(paytype: string) {
    if (!paytype) {
        alert("Вы не выбрали способ оплаты");
        return false;
    }
    if (paytype != 'card' && paytype != 'cash') {
        alert('Неверный тип оплаты!');
        return false
    }

    return true
}

export function getCartCost(cart: IProductWithAmount[]): number {
    let cost: number = 0;
    cart.forEach((item: IProductWithAmount) => {
        cost += item.price * item.amount;
    });
    return Number(cost.toFixed(2))
}