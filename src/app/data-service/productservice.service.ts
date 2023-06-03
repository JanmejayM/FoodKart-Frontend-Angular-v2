import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { concat, Observable } from 'rxjs';
import { Iproduct } from '../models/iproduct';

@Injectable({
  providedIn: 'root'
})
export class ProductserviceService {
  // product!:Product[];

  constructor(private http:HttpClient) { 


/*
  this.product=[{"id":1,
  "product_img":"https://www.whiskaffair.com/wp-content/uploads/2020/10/Veg-Hakka-Noodles-2-3.jpg",
  "product_desc":"Filled with carrots, cabbage, french beans, bell pepper and spring onions, this stir fry recipe is packed with healthy veggies.",
  "product_name":"Veg Noodles",
  "product_price":150},

  {"id":2,
  "product_img":"https://www.cubesnjuliennes.com/wp-content/uploads/2020/06/Spicy-Chicken-Hakka-Noodles-Recipe.jpg",
  "product_desc":"A classic from the Chinese cuisine. A sumptuous dish, this chicken recipe is prepared by stir-frying chicken breast and then sautéing in soya sauce and red chilli sauce.",
  "product_name":"Chicken Noodles",
  "product_price":180},

  {"id":3,
  "product_img":"https://greenbowl2soul.com/wp-content/uploads/2018/09/Veg-momos-recipe.jpg",
  "product_desc":"The veg momos are not spicy but the sauce that is served with these is spicy. I have a really good recipe of a spicy momos sauce which we call as Momos Chutney. You can try this spicy momo sauce when you make these steamed dumplings.",
  "product_name":"Veg Momos",
  "product_price":120},

  {"id":4,
  "product_img":"https://images.slurrp.com/prod/recipe_images/transcribe/ankush/Steamed-Pork-momo.webp",
  "product_desc":"Momo stuffed with mix of Soft Juicy boneless Chicken, Onion &Coriander cooked in blend of herbs and Tinch of Spices (5 Pcs). Served with Spicy Red Authentic Darjeeling Momo Sauce.",
  "product_name":"Chicken Momos",
  "product_price":140},

  {"id":5,
  "product_img":"https://www.enjoyinfourseason.com/wp-content/uploads/2022/05/Fourseason-STRAWBERRY-ICE-CREAM.jpg",
  "product_desc":"Lush, velvety, and brimming with the goodness of strawberries. Packaged in a tub for multiple servings.",
  "product_name":"Strawberry IceCream",
  "product_price":90}

];
*/
  }
  getProduct(): Observable<{
    id:number,
    name:string,
    description:string,
    image:string,
    price:number
  }[]>
  {
    return this.http.get<{
      id:number,
      name:string,
      description:string,
      image:string,
      price:number
    }[]>('http://localhost:8081/product-rest/fetch');
  }
  addProduct(product:{name:string,
    description:string,
    image:string,
    price:number
  })
  {
    return this.http.post<{
      id:number,
      name:string,
      description:string,
      image:string,
      price:number
    }>('http://localhost:8081/product-rest/add',product);

  }
  deleteProduct(data:number)
  {
    return this.http.delete("http://localhost:8081/product-rest/delete/"+data.toString());
  }

  getProductById(data:number): Observable<Iproduct[]>
  {
    return this.http.get<Iproduct[]>('http://localhost:8081/product-rest/fetch/'+data.toString());
  } 

  updateProduct(product:Iproduct)
{
  return this.http.put<Iproduct[]>('http://localhost:8081/product-rest/update',product);
}








}



