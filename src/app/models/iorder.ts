import { Iorderdetails } from "./iorderdetails";

export interface Iorder {
   id:number;
	 userid:number;
	 summary:string;
	address:string;
	calendarDate:Date;
	price:number;
	
	
description:Iorderdetails[]
	
	
	


}
