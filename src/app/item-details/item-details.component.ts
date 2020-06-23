import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import { Item } from '../models/item';
import { Cart } from '../models/cart';
import { CartComponent } from '../cart/cart.component';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent implements OnInit {

  cart: Cart;
  cartItems: Item[] = [];
  item: Item;

  category;
  itemId;

  constructor(private dataService: DataService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.category = params.get("categoryName");
      this.itemId = params.get("productSKU");
    })
    console.log(this.category);
     console.log(this.itemId);

     this.getItem(this.itemId, this.category);
  }

  getItem(id, category){
    this.dataService.getItem(id,category).subscribe((data : Item) =>{
      this.item = data;
      console.log(this.item);
    })
  }

  addToCart(id, categoryName){
    console.log(id);
    this.dataService.addItemToCart(id, categoryName).subscribe((item: Item)=>{
      this.cartItems.push(item);
      console.log('item to add: ' + item);
      console.log('item array:' + this.cartItems)
      this.cart.items = this.cartItems;      
      console.log('cart array:' +this.cart.items);
    })
    
    window.alert('Your Item Has Been Added!');
  };
    
   // localStorage.setItem('cart', JSON.stringify(this.cart));
  
}

