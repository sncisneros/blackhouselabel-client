import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import { Item } from '../models/item';
import { Category } from '../models/category';
import { items } from '../items';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {

  @Input() item : Item;
  items: Item[];
  name: String;
  category: Category;
  

  constructor(private dataService: DataService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.name = params.get("categoryName")
    })
     console.log(this.name);

     this.getCategoryItems(this.name);
  }

  getCategoryItems(categoryName){
    this.dataService.getItems(categoryName).subscribe((data: Item[]) => {
      this.items = data;
      console.log(this.items);

    })
  }

  
}
