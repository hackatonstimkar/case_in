import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserModel } from 'src/app/models/user.models';
import { UserStateService } from 'src/app/user-state.service';
import { Router } from '@angular/router';
import {FormControl} from '@angular/forms';



@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  disableSelect = new FormControl(false);
  RegisterForm: FormGroup;
  private hide: boolean = true;
  private hideConf: boolean = true;
  category:string;
  ceh:string;
  constructor(private formBuilder: FormBuilder,
              private authService: AuthService,
              private userState: UserStateService,
              private router: Router) {

  }
  ngOnInit() {

    this.RegisterForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(4)]],
      category: [this.category],
      cex: [this.ceh],
    });
  }
  isConfirmedPassword() {
    return this.RegisterForm.value.password === this.RegisterForm.value.confirmPassword;
  }
  isDisabled(){
    if (this.category !== 'Ответственный за оборудование'){
      this.ceh = '-';
      return false;
    } else {
      return true;
    }
  }
  onSubmit() {
    const user = new UserModel().build(this.RegisterForm.value);
    this.authService.register(user).subscribe(data => {
      this.userState.setUser(data);
      if (data.category === 'Ремонтный рабочий') {
        this.router.navigate(['/scores']);
      } else if (data.category === 'Директор') {
        this.router.navigate(['/target']);
      } else {
        this.router.navigate(['/target']);
      }
    });
  }
}
