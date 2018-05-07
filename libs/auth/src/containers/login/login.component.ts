import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Authenticate } from '@demo-app/data-models';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  login(authenticate: Authenticate) {
    console.log('authenticate', authenticate);
  }

}
