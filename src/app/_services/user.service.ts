import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
const authurl= 'http://localhost:8080'
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public http: HttpClient) { }
  getPublicContent(): Observable<any> {
    return this.http.get(authurl+'/all', { responseType: 'text' });
  }
  getUserBoard(): Observable<any> {
    return this.http.get(authurl+'/user', { responseType: 'text' });
  }
  getModeratorBoard(): Observable<any> {
    return this.http.get(authurl+'moderator', { responseType: 'text' });
  }
  getAdminBoard(): Observable<any> {
    return this.http.get(authurl+'/admin', { responseType: 'text' });
  }




}
