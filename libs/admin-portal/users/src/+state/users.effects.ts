import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import {
  UsersActions,
  UsersActionTypes,
  LoadUsers,
  UsersLoaded
} from './users.actions';
import { UsersState } from './users.reducer';
import { DataPersistence } from '@nrwl/nx';

@Injectable()
export class UsersEffects {
  @Effect() effect$ = this.actions$.ofType(UsersActionTypes.UsersAction);

  @Effect()
  loadUsers$ = this.dataPersistence.fetch(UsersActionTypes.LoadUsers, {
    run: (action: LoadUsers, state: UsersState) => {
      return new UsersLoaded(state);
    },

    onError: (action: LoadUsers, error) => {
      console.error('Error', error);
    }
  });

  constructor(
    private actions$: Actions,
    private dataPersistence: DataPersistence<UsersState>
  ) {}
}
