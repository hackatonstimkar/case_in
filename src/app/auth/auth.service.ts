import { Injectable } from '@angular/core';
import { UserModel } from '../models/user.models';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }

  register(user: UserModel): Observable<UserModel> {
    return this.http.post<UserModel>('http://localhost:3000/users', user);
  }

  login(user: UserModel): Observable<UserModel> {
    return this.http.get<UserModel[]>(`http://localhost:3000/users?email=${user.email}&password=${user.password}`)
      .pipe(map(users => users.length !== 0 ? users[0] : null));

  }
}

