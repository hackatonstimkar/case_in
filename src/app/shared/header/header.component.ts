import { Component, OnInit } from '@angular/core';
import {UserModel} from '../../models/user.models';
import {UserStateService} from '../../user-state.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    user: UserModel;
  constructor(private userStateServices: UserStateService) {
  }

  ngOnInit() {
    this.user = JSON.parse(window.localStorage.getItem('user'));
  }
}



