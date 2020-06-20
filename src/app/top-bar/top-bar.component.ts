import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs/operators';
import { DataService } from '../data.service';
import { Item } from '../models/Item';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  searchItems: Item[];
  @Output() onSelectedOption = new EventEmitter();
  term;

  constructor(private dataService: DataService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    

  }

  //work on search bar!
  onSubmit(term: string){
    this.dataService.searchBar(term);
  }
 
  

}