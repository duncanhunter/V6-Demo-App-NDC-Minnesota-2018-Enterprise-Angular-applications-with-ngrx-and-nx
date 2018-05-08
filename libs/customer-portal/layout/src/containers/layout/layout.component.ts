import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { AuthState, getUser } from '@demo-app/auth';
import { User } from '@demo-app/data-models';
import { Observable } from 'rxjs/Observable';
import { takeUntil, takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit, OnDestroy {
  componentActive = true;
  user: User;
  user$: Observable<User>;

  constructor(private store: Store<AuthState>) { }

  ngOnInit() {
    this.user$ = this.store.select(getUser);
    // this.store.select(state => state.auth.user).pipe(takeWhile(() => this.componentActive)).subscribe((user: User) => {
    //   this.user = user
    // });
  }

  ngOnDestroy(): void {
    this.componentActive = false
  }

}
