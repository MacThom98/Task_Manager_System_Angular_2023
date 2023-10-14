import { Injectable } from '@angular/core';
import { User } from 'src/app/interface/user';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _http:HttpClient) { }

  url="http://localhost:3000/users";

  getAllUsers(): Observable<User[]>{
    return this._http.get<User[]>(this.url);
  }
  getUserByID(id:number): Observable<User>{
    return this._http.get<User>(`${this.url}/${id}`);
  }
  createUser(user:User): Observable<User>{
    return this._http.post<User>(this.url, user);
  }
  updateUser(user:User):Observable<User>{
    return this._http.put<User>(`${this.url}/` + user.id, user);
  }
  deleteUser(id:number): Observable<User>{
    return this._http.delete<User>(`${this.url}/${id}`);
  }
    
}
