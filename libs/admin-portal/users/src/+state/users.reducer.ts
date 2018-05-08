import { Action } from '@ngrx/store';
import { UsersActions, UsersActionTypes } from './users.actions';

/**
 * Interface for the 'Users' data used in
 *  - UsersState, and
 *  - usersReducer
 */
export interface UsersData {}

/**
 * Interface to the part of the Store containing UsersState
 * and other information related to UsersData.
 */
export interface UsersState {
  readonly users: UsersData;
}

export const initialState: UsersData = {};

export function usersReducer(
  state = initialState,
  action: UsersActions
): UsersData {
  switch (action.type) {
    case UsersActionTypes.UsersAction:
      return state;

    case UsersActionTypes.UsersLoaded: {
      return { ...state, ...action.payload };
    }

    default:
      return state;
  }
}
