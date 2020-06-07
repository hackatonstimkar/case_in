import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot, Router
} from '@angular/router';

import {UserStateService} from './user-state.service';
import {Observable} from 'rxjs';

@Injectable()
export class CanActivateRouteGuard implements CanActivate {

  constructor(private userState: UserStateService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (this.userState.isAuth()) {
      console.log(this.userState.isAuth());
      return true;
    }
    this.router.navigate(['/']);
    return false;
  }

}
