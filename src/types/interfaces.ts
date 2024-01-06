export interface IProduct {
    id: number | string,
    title: string,
    img: string,
    desc: string,
    category: string,
    price: number
}

export interface IProductWithAmount extends IProduct {
    amount: number
}