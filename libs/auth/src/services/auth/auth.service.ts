import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Authenticate, User } from '@demo-app/data-models';
import { Observable } from 'rxjs/Observable';
import { tap } from 'rxjs/operators';

@Injectable()
export class AuthService {
  user: User;
  isAuthenticated: boolean;

  constructor(private httpClient: HttpClient) {
  }

  login(authenticate: Authenticate): Observable<User> {
    return this.httpClient.post<User>('http://localhost:3000/login', authenticate
    ).pipe(tap((user: User) => {
      this.isAuthenticated = true;
      this.user = user;
      localStorage.setItem('token', user.token);
    }))
  }

}
