import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Item } from '../models/item';
import { Category } from '../models/category';
import { items } from '../items';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
items = items;
  @Input() item : Item;
  constructor() { }

  ngOnInit(): void {
  }

}
