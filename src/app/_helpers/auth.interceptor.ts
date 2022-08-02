import { HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { TokenStorageService } from '../_services/token-storage.service'
const TOKEN_HEADER_KEY = 'x-access-token'
@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private token: TokenStorageService) { }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      let authreq = req;
      let token = this.token.gettoken()
      if (token != null) {
        authreq = req.clone({ headers: req.headers.set(TOKEN_HEADER_KEY,token) })
      }
      return next.handle(authreq)
    }

}
export const authInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
];
