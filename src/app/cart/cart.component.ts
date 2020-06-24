import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import { Item } from '../models/item';
import { Cart } from '../models/cart';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  @Input() cart: Cart;
  items: Item[];
 

  constructor(private dataService: DataService, private route: ActivatedRoute,
     private router: Router) { }

  ngOnInit(): void {
    this.getCart();
  }

  // //getCart(){
  //   this.dataService.getCart().subscribe((data: Cart) => {
  //     this.cart = data;
  //     console.log(this.cart);
  //   });
  //   }
  
  getCart(){
     this.cart.totalPrice = 0;
     this.cart.itemQty = 0;
    let cartItems: Item[]= [
      {
        _id: '1111',
        productName : 'tee',
        productSKU: '101',
        description : 'oversized fit',
        productPrice : 29.99,
        size : 'small',
        stock : 'in stock',
        imagePath : ['7grty.jpg']       
      },
      {
        _id: '2222',
        productName : 'skirt',
        productSKU: '102',
        description : 'mini skirt',
        productPrice : 25.95,
        size : 'medium',
        stock : 'in stock',
        imagePath : ['7g90y.jpg']
      },
      {
        _id: '3333',
        productName : 'sweater',
        productSKU: '103',
        description : 'cropped',
        productPrice : 55.99,
        size : 'small',
        stock : 'in stock',
        imagePath : ['l9urty.jpg']
      },
      {
        _id: '4444',
        productName : 'jeans',
        productSKU: '104',
        description : 'skinny',
        productPrice : 45.99,
        size : 'medium',
        stock : 'in stock',
        imagePath : ['2e3ty.jpg']
      }
    ];
    
    this.cart.items = cartItems;
    cartItems.forEach((i: Item)=>{
      this.cart.totalPrice += i.productPrice;
      this.cart.itemQty += 1;
    })
    console.log(this.cart.totalPrice);
    console.log(this.cart.itemQty);
    console.log(this.cart.items);
    return this.cart;
  }

}
