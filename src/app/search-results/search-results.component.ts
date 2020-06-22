import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import { Item } from '../models/item';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {

@Input() items: Item[];

  constructor(private dataService: DataService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getSearchItems();
  }

  getSearchItems(){
    this.dataService.onResults().subscribe(data => {
      this.items = data;
      console.log(this.items)
    })
  }
  
}
