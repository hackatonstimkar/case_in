import { Component, OnInit } from '@angular/core';
import {UserModel} from '../../models/user.models';
import {UserStateService} from '../../user-state.service';

@Component({
  selector: 'app-header2',
  templateUrl: './header2.component.html',
  styleUrls: ['./header2.component.css']
})
export class Header2Component implements OnInit {

  user: UserModel;
  constructor(private userStateServices: UserStateService) {
  }

  ngOnInit() {
    this.user = JSON.parse(window.localStorage.getItem('user'));
  }
}

