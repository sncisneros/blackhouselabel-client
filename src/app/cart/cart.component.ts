import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import { Item } from '../models/item';
import { Cart } from '../models/cart';
import { FormBuilder } from '@angular/forms';
import { Order } from '../models/order';
import { createTokenForExternalReference } from '@angular/compiler/src/identifiers';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  @Input() cart: Cart;
  items: Item[];
  checkoutForm: any;
  order: Order;
  handler:any = null;
 
  constructor(private dataService: DataService, private route: ActivatedRoute,
     private router: Router, private formBuilder: FormBuilder) { 

      this.checkoutForm = this.formBuilder.group({
        firstName: '',
        lastName: '',
        address: '',
        city: '',
        state: '',
        zip: '',
        email: ''
      });

     }

  ngOnInit(): void {
    //this.getCart();
  }

  getCart() {
    this.dataService.getCart().subscribe((data: Cart) => {
      this.cart = data;
      this.items = data.items;
      console.log(this.items);
      console.log(data);
    });
    }

    onSubmit(orderData) {
        console.log(orderData);
        let newOrder = new Order;
        newOrder.firstName = orderData.firstName;
        newOrder.lastName = orderData.lastName;
        newOrder.custAddress.address = orderData.address;
        newOrder.custAddress.city = orderData.city;
        newOrder.custAddress.state = orderData.state;
        newOrder.custAddress.zip = orderData.zip;
        newOrder.custEmail = orderData.email;
        newOrder.status = 'OPEN'
  
        this.dataService.submitOrder(newOrder).subscribe((data: Order) => {
           this.order = data;
          });


        //this.items = this.cartService.clearCart();
        this.checkoutForm.reset();
    
        console.warn('Your order is now ready for payment', newOrder);
      }
  

  
  checkOut() {
    // alert
    let confirmation = window.confirm('Confirm Cart');
    
    if(confirmation)
      this.router.navigate(['/checkout']);

  }

}
