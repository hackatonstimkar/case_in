import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SignregComponent} from './signreg/signreg.component';
import {ControlComponent} from './pages/control/control.component';
import {ScoresComponent} from './pages/scores/scores.component';
import {TargetComponent} from './pages/target/target.component';
import {CanActivateRouteGuard} from './guard';
import {AnaliticComponent} from './pages/analitic/analitic.component';
import {HistoryComponent} from './pages/history/history.component';
import {MonitorComponent} from './pages/monitor/monitor.component';

const routes: Routes = [
  {
    path: '',
    component: SignregComponent
  },
  {
    path: 'control',
    component: ControlComponent,
    canActivate: [CanActivateRouteGuard],
  },
  {
    path: 'scores',
    component: ScoresComponent,
    canActivate: [CanActivateRouteGuard]

  },
  {
    path: 'target',
    component: TargetComponent,
    canActivate: [CanActivateRouteGuard]

  }
  ,
  {
    path: 'monit',
    component: MonitorComponent,
    canActivate: [CanActivateRouteGuard]

  }
  ,
  {
    path: 'analitic',
    component: AnaliticComponent,
    canActivate: [CanActivateRouteGuard]

  }
  ,
  {
    path: 'history',
    component: HistoryComponent,
    canActivate: [CanActivateRouteGuard]

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
