import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Order } from '../models/order';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {

  @Input() order : Order;
  orderId;
  orderForm;

  constructor(private dataService: DataService, private route: ActivatedRoute, 
    private router: Router, private fB: FormBuilder) { 
    this.orderForm = this.fB.group({
      status: '',
      trackingNum: '',
    })
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
    this.orderId = params.get("orderId");
     })
    this.viewOrder(this.orderId);
  }

  viewOrder(id){
    this.dataService.getOrder(id).subscribe((data : Order) =>{
      this.order = data;
      console.log(this.order);
    })
  }

  onSubmit(orderData) {
    console.log(orderData);
    
    this.dataService.updateOrder(this.orderId, orderData.status, orderData.trackingNum).subscribe((data: Order) => {
       this.order = data;
      });
    
    //this.items = this.cartService.clearCart();
    this.orderForm.reset();

    console.warn('Order has Been Updated Successfully', this.order);
  }
}
