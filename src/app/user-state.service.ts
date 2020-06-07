import { Injectable } from '@angular/core';
import { UserModel } from 'src/app/models/user.models';
import {ScoresModel} from './models/scores.models';

@Injectable({
  providedIn: 'root'
})
export class UserStateService {

  constructor() { }

   user: UserModel = null;
   scores: ScoresModel=null;
  setUser(user: UserModel) {
    this.user = user;
    localStorage.setItem('user', JSON.stringify(user));
  }
  logOut() {
    this.user = null;
    this.scores=null;
    localStorage.removeItem('user');
    localStorage.removeItem('scores');
  }
  isAuth(): boolean {
    console.log( localStorage.getItem('user') != null);
    return localStorage.getItem('user') != null && !this.isTokenExpired();
  }
  isTokenExpired(): boolean {
    return false;
  }
  getEmail() {
    return this.user.email;
  }
  getId(){
    return this.user.id;
  }

}
