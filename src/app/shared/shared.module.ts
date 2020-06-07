import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { UserStateService } from '../user-state.service';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material';
import {RouterModule} from '@angular/router';
import { Header2Component } from './header2/header2.component';


@NgModule({
  declarations: [HeaderComponent, Header2Component],
  imports: [
    CommonModule,
    MatButtonModule,
    MatMenuModule,
    RouterModule


  ],
  exports: [
    HeaderComponent,
    Header2Component
  ],
  providers: [UserStateService]
})
export class SharedModule { }
