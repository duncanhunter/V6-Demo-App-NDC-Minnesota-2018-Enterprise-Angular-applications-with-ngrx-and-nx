import { Component, OnInit, ChangeDetectionStrategy, } from '@angular/core';
import { Authenticate, User } from '@demo-app/data-models';
import { AuthService } from './../../services/auth/auth.service';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AuthState } from './../../+state/auth.reducer';
import * as authActions from './../../+state/auth.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit {

  constructor(
    private router: Router,
    private store: Store<AuthState>
    // private authService: AuthService
  ) { }

  ngOnInit() {
  }

  login(authenticate: Authenticate) {
    this.store.dispatch(new authActions.LoginAction(authenticate));
    // this.authService.login(authenticate)
    //   .subscribe((user: User) =>
    //     this.router.navigate([`/user-profile/${user.id}`])
    //   );
  }

}
