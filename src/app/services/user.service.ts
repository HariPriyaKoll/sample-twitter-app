import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userName: any;

  constructor(private http: HttpClient)  { }

  getCurrentUser() {
    return 'Lina';
  }
  getUsers() {
    return this.http.get('http://localhost:3000/api/users');
}
setUserData(name){
  this.userName=name;
}
getUserData(){
  return this.userName;
}
}
