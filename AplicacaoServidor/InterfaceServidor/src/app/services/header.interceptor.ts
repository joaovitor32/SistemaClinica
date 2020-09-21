import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class Interceptor implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        const user = localStorage.getItem("user");
        const password = localStorage.getItem("password");

        const newRequest = request.clone({
            headers: request.headers
                .set('db_user', user)
                .set('db_password', password),
        });

        return next.handle(newRequest);
    }
}