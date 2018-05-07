import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { LoginComponent } from './containers/login/login.component';

export const authRoutes: Route[] = [];

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [LoginComponent]
})
export class AuthModule {}
