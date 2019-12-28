export interface ICandy {
    _id: string,
    name: string,
    price: number
}

export interface ICandyItem extends ICandy {
    count: number,
    sum: number,
    uuid: number
}
