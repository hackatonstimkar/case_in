import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {UserStateService} from '../../user-state.service';
import {FinanceService} from '../finance.service';
import {ScoresModel} from '../../models/scores.models';
import {TargetModels} from '../../models/target.models';

@Component({
  selector: 'app-target',
  templateUrl: './target.component.html',
  styleUrls: ['./target.component.css']
})
export class TargetComponent implements OnInit {
  public tabs;

  constructor(private userState: UserStateService, private finance: FinanceService) { }
  ngOnInit() {
    const email = this.userState.getEmail();
    this.finance.getTarget(email).subscribe(value => {
      this.tabs = value;
      console.log(this.tabs);
    });
  }
  selected = new FormControl(0);
  selectAfterAdding: boolean;
  name: string;
  sum:string;
  izmText: string;
  izmSum:string;
  Dobav:string;
  addTab(selectAfterAdding) {
    const email = this.userState.getEmail();
    const target = new TargetModels(this.name, email, Number(this.sum), 0  );

    if (selectAfterAdding) {
      this.selected.setValue(this.tabs.length);
    }
    this.name = "";
    this.sum="";
    this.finance.postTarget(target);
    this.tabs.push(target);
  }

  removeTab(index: number) {
    const tab = this.tabs[index];
    console.log(tab.id);
    console.log(tab.score);
    this.finance.delTarget(tab.id);

    this.tabs.splice(index, 1);
  }
  ChangeTab(index: number){
    const tab = this.tabs[index];
    let score = this.izmText;
    let iznsum=this.izmSum;
    if(score!==""){
      this.finance.changeNameTarget(tab.id, score);}
    if (iznsum!==""){
    this.finance.changeSumTarget(tab.id, Number(iznsum));}
    this.izmText="";
    this.izmSum="";
    setTimeout(()=>this.Update(),500);

  }
  DobavSum(index:number){
    const tab = this.tabs[index];
    const dobav =  this.Dobav;
    const sum = tab.balance + Number(dobav);
    this.finance.changeBalanceTarget(tab.id,sum);
    this.Dobav="";
    setTimeout(()=>this.Update(),500);
  }
  Update() {
    const email = this.userState.getEmail();
    this.finance.getTarget(email).subscribe(value => {
      this.tabs = value;
    });
  }
}
