import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {AuthModule} from './auth/auth.module';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {SharedModule} from './shared/shared.module';
import {MatMenuModule} from '@angular/material/menu';
import {MatTabsModule} from '@angular/material/tabs';
import { SignregComponent } from './signreg/signreg.component';
import {AppRoutingModule} from './app-routing.module';
import {ControlComponent} from './pages/control/control.component';

import {ScoresComponent} from './pages/scores/scores.component';
import { TargetComponent } from './pages/target/target.component';
import { PanelComponent } from './forms/panel/panel.component';
import { ProfitComponent } from './forms/profit/profit.component';
import { CostsComponent } from './forms/costs/costs.component';
import {MatCardModule, MatSelectModule} from '@angular/material';
import {ReactiveFormsModule} from '@angular/forms';
import { FormsModule } from '@angular/forms';
import {CanActivateRouteGuard} from './guard';
import {UserStateService} from './user-state.service';
import { AnaliticComponent } from './pages/analitic/analitic.component';
import { HistoryComponent } from './pages/history/history.component';
import { MonitorComponent } from './pages/monitor/monitor.component';
import { FlexmonsterPivotModule } from 'ng-flexmonster';

@NgModule({
  declarations: [
    AppComponent,
    SignregComponent,
    ControlComponent,
    ScoresComponent,
    TargetComponent,
    PanelComponent,
    ProfitComponent,
    CostsComponent,
    AnaliticComponent,
    HistoryComponent,
    MonitorComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    AuthModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    SharedModule,
    MatMenuModule,
    MatTabsModule,
    MatSelectModule,
    ReactiveFormsModule,
    FormsModule,
    MatCardModule,
    FlexmonsterPivotModule,


  ],
  providers: [ CanActivateRouteGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
