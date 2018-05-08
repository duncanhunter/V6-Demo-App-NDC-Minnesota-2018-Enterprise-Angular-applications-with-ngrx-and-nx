import { Action } from '@ngrx/store';
import { UsersActions, UsersActionTypes } from './users.actions';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { User } from '@demo-app/data-models';

/**
 * Interface for the 'Users' data used in
 *  - UsersState, and
 *  - usersReducer
 */
export interface UsersData extends EntityState<User>{
  selectedUserId: number;
  loading: boolean;
}

/**
 * Interface to the part of the Store containing UsersState
 * and other information related to UsersData.
 */
export interface UsersState {
  readonly users: UsersData;
}

export const adapter: EntityAdapter<User> = createEntityAdapter<User>();

export const initialState: UsersData = adapter.getInitialState({
  selectedUserId: null,
  loading: false
});

export function usersReducer(
  state = initialState,
  action: UsersActions
): UsersData {
  switch (action.type) {
    case UsersActionTypes.LoadUsers: {
      return {
        ...state,
        loading: true
      }
    }

    case UsersActionTypes.LoadUsersSuccess: {
      return adapter.addAll(action.payload, {...state, loading: false})
    }

    default:
      return state;
  }
}

export const getSelectedUserId = (state: UsersData) => state.selectedUserId;
​
export const {
  // select the array of user ids
  selectIds: selectUserIds,
​
  // select the dictionary of user entities
  selectEntities: selectUserEntities,
​
  // select the array of users
  selectAll: selectAllUsers,
​
  // select the total user count
  selectTotal: selectUserTotal
} = adapter.getSelectors();
