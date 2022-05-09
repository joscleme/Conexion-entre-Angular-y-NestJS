import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../get-users/user';

@Injectable({
  providedIn: 'root'
})
export class CreateUserService {

  allUsers = "http://localhost:3000/user";
  createUserUrl = "http://localhost:3000/user";     

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.allUsers);
  }

  createUser(user: User) {
    return this.http.post(this.createUserUrl, user);
  }
  
}
