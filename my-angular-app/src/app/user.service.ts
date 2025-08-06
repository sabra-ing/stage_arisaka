import { Injectable } from '@angular/core';
import { User } from './models/user.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {
    private apiUrl = 'https://backend_url/users';
  constructor(private http: HttpClient) { }
   addUser(user: User): Observable<User> { //observable  Handles async operations
    return this.http.post<User>(this.apiUrl, user);
  }
}
