import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import { Item } from '../models/item';
import { Cart } from '../models/cart';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent implements OnInit {

  @Input() cart: Cart;
  item: Item;
  items: Item[];

  category;
  itemId;

  constructor(private dataService: DataService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.category = params.get("categoryName");
      this.itemId = params.get("itemId");
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
    this.dataService.addItemToCart(id, categoryName).subscribe((item: Item) => this.cart.items.push(item))
    console.log(this.cart);
    window.alert('Item Added!');
    
   // localStorage.setItem('cart', JSON.stringify(this.cart));
  }

}
