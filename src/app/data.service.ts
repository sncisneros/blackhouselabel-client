import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ENV } from './env.config';
import { Category } from './models/category';
import { Item } from './models/item';
import { Cart } from './models/cart';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  items: Item[];
  searchItems: Item[];

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
      .get<Item>(`${ENV.BASE_API}category/${categoryName}/${id}`);
  };

  addItemToCart(id: string, categoryName: string){
    return this.http.get<Item>(`${ENV.BASE_API}category/${categoryName}/${id}/add`, {
      withCredentials: true
    });
    
  }

  
  getCart(){
    return this.http
      .get<Cart>(`${ENV.BASE_API}my-cart`);
  }

  searchBar(term: string){
    let params = new HttpParams();
    params = params.append('search', term);

    return this.http
      .get<Item[]>(`${ENV.BASE_API}search`, {params: params}).subscribe((data: Item[]) => {
        this.searchItems = data;
        console.log(this.searchItems);
      })
  }

}
