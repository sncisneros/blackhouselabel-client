import { Component, OnInit } from '@angular/core';
import { Order } from '../models/order';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  passwordFlag: boolean;
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.passwordFlag = false;
  }

  login(username, password) {
    this.authService.login(username, password).subscribe( response => {
        this.authService.setJwt(response.token);
        this.router.navigate(['user']);
    });
  }
}