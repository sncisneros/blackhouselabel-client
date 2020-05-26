import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ENV } from './env.config';
import { Category } from './models/category';
import { Item } from './models/item';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getCategories(){
    return this.http
      .get<Category[]>(`${ENV.BASE_API}home`);
  }

  getItems( categoryName: string ){
    return this.http
      .get<Item[]>(`${ENV.BASE_API}category/${categoryName}`);
    
  }
  getItem( id: string, categoryName: string ){
    return this.http
      .get(`${ENV.BASE_API}category/${categoryName}/${id}`);
  };

  // addItemToCart(id: string){
  //   return this.http
  //   /category/:categoryName/:itemId/addToCart
  // }

}
