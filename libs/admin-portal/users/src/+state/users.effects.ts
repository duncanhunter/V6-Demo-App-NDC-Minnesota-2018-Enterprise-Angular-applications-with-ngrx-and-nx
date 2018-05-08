import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import {
  UsersActions,
  UsersActionTypes
} from './users.actions';
import { UsersState } from './users.reducer';
import { DataPersistence } from '@nrwl/nx';
import * as usersActions from './users.actions';
import { UsersService } from '@demo-app/admin-portal/users/src/services/users.service';
import { map } from 'rxjs/operators';
import { User } from '@demo-app/data-models';

@Injectable()
export class UsersEffects {

  @Effect()
  loadUsers$ = this.dataPersistence.fetch(usersActions.UsersActionTypes.LoadUsers, {
    run: (action: usersActions.LoadUsersAction, state: UsersState) => {
      return this.usersService
      .getUsers()
      .pipe(
        map((users: User[]) => (new usersActions.LoadUsersSuccessAction(users)))
      )
    },

    onError: (action: usersActions.LoadUsersAction, error) => {
      return new usersActions.LoadUsersFailAction(error);
    }
  });

  constructor(
    private actions$: Actions,
    private dataPersistence: DataPersistence<UsersState>,
    private usersService: UsersService
  ) {}
}
