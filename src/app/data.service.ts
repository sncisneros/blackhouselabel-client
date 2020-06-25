import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { ENV } from './env.config';
import { Category } from './models/category';
import { Item } from './models/item';
import { Order } from './models/order';
import { Cart } from './models/cart';
import { Observable, of } from 'rxjs';
import { AuthService } from './auth.service';
import { Identifiers } from '@angular/compiler';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  items: Item[];
  searchItems: Item[];
  cart: Cart;
  

  constructor(private http: HttpClient, private authService: AuthService) {

   }

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

//----------------------------------------------


  addItemToCart(id: string, categoryName: string){
    return this.http.get<Item>(`${ENV.BASE_API}category/${categoryName}/${id}/add`);
    
  }

  
  getCart(){
    return this.http
      .get<Cart>(`${ENV.BASE_API}getsession`,{ withCredentials: true });
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
  
  getOpenOrders(){
    //const headers = new HttpHeaders({'Authorization': this.authService.getToken()});
    return this.http.get<Order[]>(`${ENV.BASE_API}admin/orders`);
  }

  getOrderById(id: string){
    return this.http.get<Order>(`${ENV.BASE_API}admin/orders/${id}`);
  }

  getAllOrders(){
    return this.http.get<Order[]>(`${ENV.BASE_API}admin/orders/all`)
  }

  updateOrder(id: string, status: string, trackingNum: string){
    return this.http.post(`${ENV.BASE_API}/admin/order/${id}/status/${status}`, trackingNum)
  }

  submitOrder(order: Order){
    return this.http.post(`${ENV.BASE_API}checkout`, order);
  }

}
