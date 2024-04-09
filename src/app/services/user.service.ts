// user.service.ts

import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private userSubject = new BehaviorSubject<any>(null);
  user$ = this.userSubject.asObservable();

  setUser(user: any) {
    localStorage.setItem('user',JSON.stringify(user));

    this.userSubject.next(user);
    this.getUser();
  }
  getUser(): any{
    // this.userSubject.next(JSON.parse(localStorage.getItem('user')));
    // this.userSubject.subscribe((res)=>{
    //   console.log(res)
    // })
    return JSON.parse(localStorage.getItem('user'));
  }
}
