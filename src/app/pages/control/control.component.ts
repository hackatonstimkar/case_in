import { Component, OnInit } from '@angular/core';
import {UserModel} from '../../models/user.models';
import {ScoresModel} from '../../models/scores.models';
import {UserStateService} from '../../user-state.service';
import {FinanceService} from '../finance.service';

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.css']
})
export class ControlComponent implements OnInit {
  public tabs;
  public budget;
  constructor(private userState: UserStateService, private finance: FinanceService) { }

  ngOnInit() {

    const email = this.userState.getEmail();
    this.finance.getScore(email).subscribe(value => {
      this.tabs = value;
    });
    this.finance.getBudget().subscribe(value => {
      this.budget = value;
      console.log(this.budget);
    });
  }

}
