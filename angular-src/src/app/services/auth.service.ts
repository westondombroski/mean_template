import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { tokenNotExpired } from 'angular2-jwt';

@Injectable()
export class AuthService {
  authToken: any;
  user: any;

  constructor(private http:HttpClient) { }

  registerUser(user){
    return this.http
      .post('users/register', user, {
        headers: new HttpHeaders().set('Content-Type', 'application/json'),
    })
  }

  authenticateUser(user){
    return this.http
      .post('users/authenticate', user, {
        headers: new HttpHeaders().set('Content-Type', 'application/json'),
    })
  }

  getProfile(){
    let headers = new HttpHeaders();
    this.loadToken();
    headers.set('Content-Type', 'application/json');
    return this.http.get('users/profile', {
      headers: headers.set('Authorization', this.authToken)
    })
  }

  storeUserData(token, user){
    localStorage.setItem('id_token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }

  loadToken(){
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }

  loggedIn() {
    return tokenNotExpired('id_token');
  }

  logout(){
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }
}
