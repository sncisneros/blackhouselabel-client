import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { Category } from '../models/category';
import { Item } from "../models/item";
import { categories } from '../categories';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
  
  // @Input() category: Category;
  // items: Item[];
  // categories: Category[];
  categories = categories;


  constructor(private dataService: DataService, private router: Router) { }
  

  ngOnInit() {
   // this.getAllCategories();
  }

  // getAllCategories(){
  //   this.dataService.getCategories().subscribe((data: Category[]) => {
  //     this.categories = data;
  //     console.log(this.categories);
  //   })
  // }

}
