import { Iproduct } from "./iproduct";

export interface IcartItem {

    cartItemId:number;
    userid:number;
    product:Iproduct;
    quantity:number;
}
