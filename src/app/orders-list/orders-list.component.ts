import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Order } from '../models/order';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.css']
})
export class OrdersListComponent implements OnInit {
  orders: Order[];
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.viewOrders();
  }

  viewOrders(){
    this.dataService.getOpenOrders().subscribe( orders => {
      this.orders = orders;
      console.log(this.orders)
    });
  }
}
