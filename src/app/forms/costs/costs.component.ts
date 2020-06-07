import { Component, OnInit } from '@angular/core';
import {FinanceService} from '../../pages/finance.service';
import {UserStateService} from '../../user-state.service';
import {ScoresModel} from '../../models/scores.models';
import {BudgetModel} from '../../models/budget.models';

@Component({
  selector: 'app-costs',
  templateUrl: './costs.component.html',
  styleUrls: ['./costs.component.css']
})
export class CostsComponent implements OnInit {
  sum: number;
  name: string;
  podcategory: string;
  public tabs;
  constructor(private userState: UserStateService, private finance: FinanceService) { }
  ngOnInit() {
    const email = this.userState.getEmail();
    this.finance.getScore(email).subscribe(value => {
      this.tabs = value;
      console.log(this.tabs);
    });
  }

  onSubmit() {
    const email = this.userState.getEmail()
    const budget = new BudgetModel(this.name,'расходы', this.podcategory, -this.sum)
    this.finance.postBudget(budget);
    alert("Запись добавлена");
  }
}
