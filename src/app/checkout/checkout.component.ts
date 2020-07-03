import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DataService } from '../data.service';
import { Cart } from '../models/cart';
import { Order } from '../models/order';



@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

@Input() order: Order;
cart: Cart;
checkoutForm;

  constructor(private dataService: DataService, private formBuilder: FormBuilder) { 
    this.checkoutForm = this.formBuilder.group({
      firstName: 'donkey',
      lastName: 'dunksalot',
      address: '369',
      city: 'damshefine',
      state: 'CA',
      zip: '19333',
      email: 'liljon@getlow.org'
    })
  }

  ngOnInit(): void {
    this.getCart();
  }

  getCart(){
    this.dataService.getCart();
    }

    onSubmit(orderData) {
      console.log(orderData);
      let newOrder = new Order;
      newOrder.firstName = orderData.firstName;
      newOrder.lastName = orderData.lastName;
      newOrder.custAddress = orderData.address;
      newOrder.custEmail = orderData.email;

      this.dataService.submitOrder(newOrder).subscribe((data: Order) => {
         this.order = data;
        });
      
      // handled server side
      // this.items = this.cartService.clearCart();
      this.checkoutForm.reset();
  
      console.warn('Your order has been submitted', newOrder);
    }

}
