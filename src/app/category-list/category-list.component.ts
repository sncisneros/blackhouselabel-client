import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { categories } from '../categories';
import { Category } from '../models/category';
import { Item } from "../models/item";

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
  
  @Input() category: Category;


  constructor() { }
  Category;

  ngOnInit(): void {
  }

}
