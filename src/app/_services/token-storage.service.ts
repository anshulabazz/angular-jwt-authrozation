import { Injectable } from '@angular/core';
const TOKEN_KEY = 'auth-token';
const USER_KEY='auth-user'

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

  constructor() { }
  signout() {
    window.sessionStorage.clear()
  }
  savetoken(token: any):void {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY,token)

  }
  gettoken() {
    return window.sessionStorage.getItem(TOKEN_KEY)
  }
  saveuser(user: any):void {
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY,user)
  }
  getuser() {
    const user =window.sessionStorage.getItem(USER_KEY)
    if (user) {
      return JSON.parse(user);
    }
    return {};
  }
  }


