import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {UserModel} from '../../models/user.models';


@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor(private http: HttpClient) {
  }

  login(user: UserModel ): Observable<UserModel> {
    return this.http.get<UserModel[]>(`http://localhost:3000/users?email=${user.email}&password=${user.password}`)
    // tslint:disable-next-line:no-shadowed-variable
     .pipe(map(user => user.length !== 0 ? user[0] : null));
  }

  registrations(user: UserModel ): Observable<UserModel> {
    return this.http.post<UserModel>('http://localhost:3000/users', user);
  }
}
