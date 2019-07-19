import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, from } from 'rxjs';
import { User } from './user';

import { SharedService } from '../services/shared.service'

@Injectable()
export class AuthService {
  private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }
  currentUser: string;
  users = [];
  getUser: any;

  constructor(private router: Router, public sharedService: SharedService) {}

  login(user: User) {
    this.getUser = JSON.parse(localStorage.getItem('users')) || [];
    const getUser = this.getUser.find((x: { username: string; password: string; }) => x.username === user.username && x.password === user.password);
    console.log(this.getUser);
    if(!getUser){
      this.sharedService.hasLoginError = true;
      this.sharedService.setLoginErrorMessage = "Your username and/or password do not match";
      console.log('User not found');
    }else{
      console.log('found');
      this.sharedService.loggedUser = user.username;
      this.loggedIn.next(true);
      this.router.navigate(['/']);
    }
  }

  logout() {
    this.loggedIn.next(false);
    this.router.navigate(['/login']);
  }
}

    // const user = this.users.find(x => x.username === loginObj.username && x.password === loginObj.password);