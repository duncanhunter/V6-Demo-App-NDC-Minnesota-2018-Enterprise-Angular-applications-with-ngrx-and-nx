import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { LoginComponent } from './containers/login/login.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { HttpClientModule } from "@angular/common/http";
import { AuthService } from './services/auth/auth.service';

export const authRoutes: Route[] = [
  { path: 'login', component: LoginComponent },
];

const COMPONENTS = [LoginComponent, LoginFormComponent];
@NgModule({
  imports: [CommonModule, RouterModule, HttpClientModule],
  declarations: [COMPONENTS],
  exports: [COMPONENTS],
  providers: [AuthService]
})
export class AuthModule {}
