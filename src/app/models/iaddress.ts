import { Iuser } from "./iuser";

export interface Iaddress {

    address_id:number;
	houseno:string;
	street:string;
	city:string;
	state:string;
    pincode:string;
	user:Iuser;
}
