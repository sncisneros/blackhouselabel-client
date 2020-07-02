import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import { Item } from '../models/item';
import { Cart } from '../models/cart';
import { items } from '../items';
import { categories } from '../categories';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent implements OnInit {

  @Input() item: Item;

   category;
   itemId;

  cart: Cart;
  mainImage

  constructor(private dataService: DataService, private route: ActivatedRoute, private router: Router) {}
   
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.category = params.get("categoryName");
      this.itemId = params.get("productSKU");
    })
    console.log(this.category);
     console.log(this.itemId);

     this.getItem(this.itemId, this.category);

    //  this.route.paramMap.subscribe(params =>{
    //   this.items = items[+params.get('productSKU')]
      
    //  });
  }

  changeMainImg(image:any){
    this.mainImage = image;
  }
 

  getItem(id, category){
    this.dataService.getItem(id,category).subscribe((data : Item) =>{
      this.item = data;
      
     this.mainImage = this.item.imagePath[0];
      console.log(this.item);
    })
  }

  addToCart(id, categoryName, size, color){
    console.log(id);
    this.dataService.addItemToCart(id, categoryName, size, color).subscribe((item: Item)=>{
      this.cart.items.push(item);
      console.log('item to add: ' + item);     
      console.log('cart array:' + this.cart.items);
    })
    
    window.alert('Your Item Has Been Added!');
  };
    
   
}

