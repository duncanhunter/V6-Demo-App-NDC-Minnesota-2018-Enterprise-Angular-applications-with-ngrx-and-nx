import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Authenticate } from '@demo-app/data-models';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService {

  constructor(private httpClient: HttpClient) {
  }

  login(authenticate: Authenticate): Observable<any> {
    debugger;
    return this.httpClient.post('http://localhost:3000/login', authenticate
    )
  }

}
