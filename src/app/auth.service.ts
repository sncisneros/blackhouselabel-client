import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ENV } from './env.config';
import * as jwt_decode from 'jwt-decode';

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) { }
  login(username, password): Observable<any> {
    return this.http.post<any>(`${ENV.BASE_API}login`, {'username': username, 'password': password});
  }
  setJwt(token) {
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(this.getDecodedAccessToken(token)));
  }
  getUser() {
    return JSON.parse(localStorage.getItem('user'));
  }
  getToken() {
    return localStorage.getItem('token');
  }
  getDecodedAccessToken(token: string): any {
    try {
        return jwt_decode(token);
    } catch (Error) {
        return null;
    }
  }
}
