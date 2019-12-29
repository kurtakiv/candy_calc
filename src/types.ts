export interface ICandy {
    _id: string,
    name: string,
    price: number,
    unit: string
}

export interface ICandyItem extends ICandy {
    count: number,
    sum: number,
    uuid: number
}
