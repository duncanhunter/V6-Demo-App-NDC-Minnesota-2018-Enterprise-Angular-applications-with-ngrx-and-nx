import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { LoginComponent } from './containers/login/login.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthService } from './services/auth/auth.service';
import { MaterialModule } from '@demo-app/material';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthGuard } from './guards/auth/auth.guard';
import { AuthInterceptor } from '@demo-app/auth/src/interceptors/auth/auth.interceptor';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { authReducer, initialState as authInitialState } from './+state/auth.reducer';
import { AuthEffects } from './+state/auth.effects';
import { AuthAdminGuard } from '@demo-app/auth';

export const authRoutes: Route[] = [
  { path: 'login', component: LoginComponent }
];

const COMPONENTS = [LoginComponent, LoginFormComponent];
@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    MaterialModule,
    ReactiveFormsModule,
    StoreModule.forFeature('auth', authReducer, { initialState: authInitialState }),
    EffectsModule.forFeature([AuthEffects])
  ],
  declarations: [COMPONENTS],
  exports: [COMPONENTS],
  providers: [
    AuthService,
    AuthGuard,
    AuthAdminGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
    AuthEffects
  ]
})
export class AuthModule {}
