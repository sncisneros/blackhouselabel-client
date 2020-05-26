import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  @Output() navToggled = new EventEmitter();
  navOpen = false;

  constructor(private router: Router) { }

  ngOnInit() {
    this.router.events
    .pipe(
      filter(event => event instanceof NavigationStart && this.navOpen)
    )
    .subscribe(event => this.barNav());

  }

  barNav(){
      this.navOpen = !this.navOpen;
      this.navToggled.emit(this.navOpen);
    }
  

}