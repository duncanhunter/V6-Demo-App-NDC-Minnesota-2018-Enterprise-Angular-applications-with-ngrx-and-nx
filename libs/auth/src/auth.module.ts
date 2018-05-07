import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { LoginComponent } from './containers/login/login.component';
import { LoginFormComponent } from './components/login-form/login-form.component';

export const authRoutes: Route[] = [
  { path: 'login', component: LoginComponent },
];

const COMPONENTS = [LoginComponent, LoginFormComponent];
@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [COMPONENTS],
  exports: [COMPONENTS]
})
export class AuthModule {}
