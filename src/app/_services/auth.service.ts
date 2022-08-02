import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs'
const authurl = 'http://localhost:8080';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
 
export class AuthService {
  
  constructor(public http: HttpClient) { }
  register(username: string, email: string, password: string, role:string): Observable<any> {
    return this.http.post(authurl+'/signup', { username, email, password,role }, httpOptions)

  }
  login(username: string, password: string): Observable<any> {

    return this.http.post(authurl+'/signin', {username,password},httpOptions)

  }


  

}
