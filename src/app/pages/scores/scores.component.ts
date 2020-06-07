import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {ScoresModel} from '../../models/scores.models';
import {FinanceService} from '../finance.service';
import {UserStateService} from '../../user-state.service';




@Component({
  selector: 'app-scores',
  templateUrl: './scores.component.html',
  styleUrls: ['./scores.component.css']
})
export class ScoresComponent implements OnInit {
  public tabs;
  private budget;
  public message;
  public mes = [{id:1,mes:'добрый день'},{id:2,mes:'добрый'},{id:1,mes:'добрый день'},{id:1,mes:'добрый день'},{id:2,mes:'добрый день'},{id:2,mes:'я почти закночил чинить станок'},{id:1,mes:'ок'},{id:2,mes:'добрый день'},{id:1,mes:'добрый день'},{id:2,mes:'добрый'},{id:1,mes:'добрый день'}];
  constructor(private userState: UserStateService, private finance: FinanceService) { }
  data = [{name: "Станок ЧПУ", model: 'AMAN 2030 800W' , img: '../assets/stan.png' , er: 'error1', tamen: '25.04.2020 17:32' , tend: '25.04.2020 20:32'},{name: "Станок ЧПУ", model: 'AMAN  800W' , img: '../assets/stan1.png' , er: 'error5', tamen: '25.04.2020 17:32' , tend: '25.04.2020 20:32'},{name: "Станок ЧПУ", model: 'AMAN 2030 800W' , img: '../assets/stan.png' , er: 'error1', tamen: '24.04.2020 16:15' , tend: '26.04.2020 20:32'},{name: "Станок ЧПУ", model: 'ERT 560' , img: '../assets/stan2.png' , er: 'error2', tamen: '25.04.2020 17:32' , tend: '25.04.2020 20:32'},{name: "Станок ЧПУ", model: 'ERSON 760' , img: '../assets/stan3.png' , er: 'error1', tamen: '25.04.2020 17:32' , tend: '25.04.2020 20:32'},{name: "Станок ЧПУ", model: 'AMAN 2030 800W' , img: '../assets/stan.png' , er: 'error1', tamen: '25.04.2020 17:32' , tend: '25.04.2020 20:32'},{name: "Станок ЧПУ", model: 'AMAN 2030 800W' , img: '../assets/stan.png' , er: 'error1', tamen: '25.04.2020 17:32' , tend: '25.04.2020 20:32'}];
  ngOnInit() {
    const email = this.userState.getEmail();
    this.finance.getScore(email).subscribe(value => {
      this.tabs = value;
      console.log(this.tabs);
    });
    this.finance.getBudget().subscribe(value => {
      this.budget=value;
      console.log(this.budget);
    });

  }
  selected = new FormControl(0);
  selectAfterAdding: boolean;
  inputText: string;
  izmText: string;
  addTab(selectAfterAdding) {
    const id=this.userState.getId();
    const email = this.userState.getEmail();
    const scores = new ScoresModel(this.inputText, email, id );
    if (selectAfterAdding) {
      this.selected.setValue(this.tabs.length);
    }
    this.inputText = "";
    this.finance.postScore(scores);
    this.tabs.push(scores);

  }

  removeTab(index: number) {
    const tab = this.tabs[index];
    console.log(tab.id);
    console.log(tab.score);
    const bud = this.budget;
    for (let j in bud) {
      if (bud[j].score === tab.score) {
        this.finance.delBudget(bud[j].id);
      }
    }
    this.finance.delScore(tab.id);

    this.tabs.splice(index, 1);

  }
  ChangeTab(index: number){
    const tab = this.tabs[index];
    let score = this.izmText;
    const bud = this.budget;
    for (let j in bud) {
      if (bud[j].score === tab.score) {
        this.finance.changeBudget(bud[j].id,score);
      }
    }
     this.finance.changeScore(tab.id, score);
     this.izmText="";
     setTimeout(()=>this.Update(),500);
    console.log('kkk');
  }
  Update() {
    const email = this.userState.getEmail();
    this.finance.getScore(email).subscribe(value => {
      this.tabs = value;
    });
    this.finance.getBudget().subscribe(value => {
      this.budget=value;
      console.log(this.budget);
    });
  }
  send(){
    this.mes.push({id:2,mes:this.message});
    this.message = '';
  }
}
