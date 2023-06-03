import { IcartItem } from "./icart-item"

export interface Icart {
    cartId:number
    userid:number
    cartitem:IcartItem[]
}
