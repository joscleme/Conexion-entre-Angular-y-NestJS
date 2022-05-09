import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user'; 

@Injectable({
  providedIn: 'root'
})
export class GetUsersService {

  allUsers = "http://localhost:3000/user";

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    
    return this.http.get<User[]>(this.allUsers);    
  
  }

  getUser(id: string): Observable<User> {

    return this.http.get<User>(`http://localhost:3000/user/${id}`);
  
  }

  deleteUserSelected(id: string): Observable<User> {
    
    return this.http.delete<User>(`http://localhost:3000/user/${id}`);  
  
  }

  updateUserSelected(id: string, user: User): Observable<User> {

    return this.http.put<User>(`http://localhost:3000/user/${id}`, user);

  }

}
