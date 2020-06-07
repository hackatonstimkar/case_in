import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ScoresModel} from '../models/scores.models';
import {BudgetModel} from '../models/budget.models';
import {TargetModels} from '../models/target.models';

@Injectable({
  providedIn: 'root'
})

export class FinanceService {

  constructor(private http: HttpClient) {
  }

  postScore(scores: ScoresModel) {
    return this.http.post('http://localhost:3000/scores', scores).toPromise();
  }
  postTarget(target: TargetModels) {
    return this.http.post('http://localhost:3000/target', target).toPromise();
  }

  getScore(email) {
    return this.http.get(`http://localhost:3000/scores?userEmail=${email}`);
  }
  getTarget(email) {
    return this.http.get(`http://localhost:3000/target?userEmail=${email}`);
  }
  delScore(id: number) {
    return this.http.delete('http://localhost:3000/scores/' + id).toPromise();
  }
  delTarget(id: number) {
    return this.http.delete('http://localhost:3000/target/' + id).toPromise();
  }

  postBudget(budget: BudgetModel) {
    return this.http.post('http://localhost:3000/budget', budget).toPromise();
  }
  getBudget(){
    return this.http.get(`http://localhost:3000/budget`);
  }
  delBudget(id: number) {
    return this.http.delete('http://localhost:3000/budget/' + id).toPromise();
  }
  changeScore(id, name) {
    return this.http.patch('http://localhost:3000/scores/' + id, {score:name}).toPromise();
  }
  changeBudget(id,name){
    return this.http.patch('http://localhost:3000/budget/' + id, {score:name}).toPromise();
  }
  changeNameTarget(id,name){
    return this.http.patch('http://localhost:3000/target/' + id, {name:name}).toPromise();
  }
  changeSumTarget(id, sum) {
    return this.http.patch('http://localhost:3000/target/' + id, {sum: sum}).toPromise();
  }
  changeBalanceTarget(id, balance){
    return this.http.patch('http://localhost:3000/target/' + id, {balance: balance}).toPromise();
  }
}
