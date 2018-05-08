import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UserListComponent } from './containers/user-list/user-list.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import {
  usersReducer,
  initialState as usersInitialState
} from './+state/users.reducer';
import { UsersEffects } from './+state/users.effects';
import { UsersService } from '@demo-app/admin-portal/users/src/services/users.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: UserListComponent }
    ]),
    StoreModule.forFeature('users', usersReducer, {
      initialState: usersInitialState
    }),
    EffectsModule.forFeature([UsersEffects])
  ],
  declarations: [UserListComponent],
  providers: [UsersEffects, UsersService]
})
export class UsersModule {}
