import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class Interceptor implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        //-------------------------- Descomente abaixo para rodar no *ELECTRON* ------------------------//
       const user = localStorage.getItem("user");
        const password = localStorage.getItem("password"); 
        //-------------------------- Descomente abaixo para rodar no *ANGULAR* ------------------------//
       //  const user = "servidorLabmed" ;
        // const password = "labmed2019" ; 
        // *Lembre de trocar o caminho do url nos services* //
        //-------------------------- daqui pra baixo não é necessário mudar------------------------//
        const newRequest = request.clone({
            headers: request.headers
                .set('db_user', user)
                .set('db_password', password),
        });

        return next.handle(newRequest);
    }
}