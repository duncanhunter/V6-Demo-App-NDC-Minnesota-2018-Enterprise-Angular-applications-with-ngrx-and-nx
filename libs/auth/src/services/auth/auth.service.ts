import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Authenticate, User } from '@demo-app/data-models';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService {

  constructor(private httpClient: HttpClient) {
  }

  login(authenticate: Authenticate): Observable<User> {
    return this.httpClient.post<User>('http://localhost:3000/login', authenticate
    )
  }

}
