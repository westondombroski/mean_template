import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {
  authToken: any;
  user: any;

  constructor(private http:HttpClient) { }

  registerUser(user){
    return this.http
      .post('http://localhost:3000/users/register', user, {
        headers: new HttpHeaders().set('Content-Type', 'application/json'),
    })
  }

  authenticateUser(user){
    return this.http
      .post('http://localhost:3000/users/authenticate', user, {
        headers: new HttpHeaders().set('Content-Type', 'application/json'),
    })
  }

  storeUserData(token, user){
    localStorage.setItem('id_token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }

  logout(){
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }
}
