import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'blackhouse-label-client';
  private cookieValue: string;

  constructor(private cookieService: CookieService){}


  public ngOnInit(): void {
    this.cookieService.set('cookie-name', 'customer');
    this.cookieValue = this.cookieService.get('cookie-name');
  }
  
}
