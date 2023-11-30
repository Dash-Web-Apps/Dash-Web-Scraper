import { Injectable } from "@angular/core";
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest} from '@angular/common/http';
import { Observable } from 'rxjs';
import {Provider} from '@angular/core'
import {HTTP_INTERCEPTORS} from '@angular/common/http'
/*Class and provider for a noop interceptor */
@Injectable()
export class NoopInterceptor implements HttpInterceptor{
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req);
    }
}
export const noopProvider: Provider = {
    provide: HTTP_INTERCEPTORS, useClass:NoopInterceptor, multi: true
};
/*DO NOT USE */
/*class and provider for an authentication interceptor where the auth methid is left null*/
@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private auth: null) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    // Get the auth token from the service.
    const authToken = this.auth.getAuthorizationToken();

    // Clone the request and replace the original headers with
    // cloned headers, updated with the authorization.
    const authReq = req.clone({
      headers: req.headers.set('Authorization', authToken)
    });

    // send cloned request with header to the next handler.
    return next.handle(authReq);
  }
}