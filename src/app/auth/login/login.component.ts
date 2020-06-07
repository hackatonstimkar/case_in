import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserStateService} from '../../user-state.service';
import {Router} from '@angular/router';
import {UserModel} from '../../models/user.models';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  LoginForm: FormGroup;
  private hide: boolean = true;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private userState: UserStateService,
    private router: Router
  ) {

  }

  ngOnInit() {
    this.LoginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4)]],
    });
  }

  onSubmit() {
    const user = new UserModel().build(this.LoginForm.value);
    this.authService.login(user).subscribe(data => {
      if (data !== null) {
        this.userState.setUser(data);
        if (data.category === 'Ремонтный рабочий') {
          this.router.navigate(['/scores']);
        } else if (data.category === 'Директор') {
          this.router.navigate(['/control']);
        } else {
          this.router.navigate(['/target']);
        }
      }
    });
  }
}
