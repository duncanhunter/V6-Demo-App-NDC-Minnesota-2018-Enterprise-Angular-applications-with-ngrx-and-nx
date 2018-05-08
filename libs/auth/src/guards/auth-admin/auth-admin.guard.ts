import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './../../services/auth/auth.service';
import { getUser } from './../../+state/index';
import { AuthState } from './../../+state/auth.reducer';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { User } from '@demo-app/data-models';

@Injectable()
export class AuthAdminGuard implements CanActivate {
  constructor(private router: Router, private store: Store<AuthState>) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.store.select(getUser).pipe(
      map((user: User) => {
        if (user && user.role === 'admin') {
          return true;
        } else {
          this.router.navigate([`/auth/login`]);
          return false;
        }
      })
    );
  }
}
