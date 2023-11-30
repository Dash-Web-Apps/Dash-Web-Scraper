import { Injectable } from "@angular/core";
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest} from '@angular/common/http';
import { Observable } from 'rxjs';
import {Provider} from '@angular/core'
import {HTTP_INTERCEPTORS} from '@angular/common/http'

@Injectable()
export class NoopInterceptor implements HttpInterceptor{
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req);
    }
}
export const noopProvider: Provider = {
    provide: HTTP_INTERCEPTORS, useClass:NoopInterceptor, multi: true
};
@Injectable()
export class AuthInterceptor implements HttpInterceptor