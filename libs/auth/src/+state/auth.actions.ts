import { Action } from '@ngrx/store';
import { Authenticate, User } from '@demo-app/data-models';

export enum AuthActionTypes {
  Login = '[AuthState] Login',
  LoginSuccess = '[AuthState] Login Success',
  LoginFail = '[AuthState] Login Fail'
}

export class LoginAction implements Action {
  readonly type = AuthActionTypes.Login;
  constructor(public payload: Authenticate) {}
}

export class LoginSuccessAction implements Action {
  readonly type = AuthActionTypes.LoginSuccess;
  constructor(public payload: User) {}
}

export class LoginFailAction implements Action {
  readonly type = AuthActionTypes.LoginFail;
  constructor(public payload: any) {}
}

export type AuthActions = LoginAction | LoginSuccessAction | LoginFailAction;
