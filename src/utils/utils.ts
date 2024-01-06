export function isInputsEmpty(inputsClass: string): boolean {
    let isError = false;
    const inputNodes: NodeListOf<HTMLInputElement> = document.querySelectorAll(
        `.${inputsClass}`
    );
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
    const addressPopupNode = document.getElementById(popupId)
        document.body.classList.toggle('fixe-scroll')
        addressPopupNode?.classList.toggle('popup_active');
}
