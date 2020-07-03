import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { ENV } from './env.config';
import { Category } from './models/category';
import { Item } from './models/item';
import { Order } from './models/order';
import { Cart } from './models/cart';
import { Observable, of } from 'rxjs';
import { Identifiers } from '@angular/compiler';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  items: Item[];
  searchItems: Item[];
  cart: Cart;
  

  constructor(private http: HttpClient) {

   }

  getCategories(): Observable<Category[]>{
    return this.http
      .get<Category[]>(`${ENV.BASE_API}home`);
  }

  getItems( categoryName: string ): Observable<Item[]>{
    return this.http
      .get<Item[]>(`${ENV.BASE_API}category/${categoryName}`);
    
  }
  getItem( id: string, categoryName: string ): Observable<Item>{
    return this.http
      .get<Item>(`${ENV.BASE_API}category/${categoryName}/${id}`);
  };

//----------------------------------------------


  addItemToCart(id: string, categoryName: string, size: string, color: string){
  
    return this.http
    .post<Item>(`${ENV.BASE_API}category/${categoryName}/${id}/add`, {color:color, size: size}, { withCredentials: true });
    
  }

  
  getCart(){
    return this.http
      .get<Cart>(`${ENV.BASE_API}my-cart`,{ withCredentials: true });
  }

// -----------------------------------------------


  onResults(){
    console.log('on results:' + this.searchItems)
    return of(this.searchItems);
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
  

  submitOrder(order: Order): Observable<Order>{
    return this.http.post<Order>(`${ENV.BASE_API}my-cart`, order);
  }

}
