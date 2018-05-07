import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UserProfileComponent } from './containers/user-profile/user-profile.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
     { path: ':id', component: UserProfileComponent }
    ])
  ],
  declarations: [UserProfileComponent]
})
export class UserProfileModule {}
