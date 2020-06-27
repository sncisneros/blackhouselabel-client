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
    this.items = [];
  }

  getCart() {
    this.dataService.getCart().subscribe((data: Cart) => {
      this.cart = data;
      let formattedItems = [];
       let keys = Object.keys(this.cart.items);
       keys.forEach(key => {
         this.items.push( this.cart.items[key] );
       });
      // this.cart.items.forEach( item => {
        console.log(this.items)
      // });

    });
  }
  
  checkOut() {
    // alert
    let confirmation = window.confirm('Confirm Cart');
    
    if(confirmation)
      this.router.navigate(['/checkout']);

  }

}
