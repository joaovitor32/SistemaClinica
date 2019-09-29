import { Injectable } from '@angular/core';
import{HttpRequest,HttpHandler,HttpInterceptor, HttpEvent} from '@angular/common/http'
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class Interceptor implements HttpInterceptor{

  intercept(req: HttpRequest<any>, next: HttpHandler):Observable<HttpEvent<any>>  {
    
    const newRequest = req.clone({

      headers:req.headers

        .set('DB_user','servidorLabmed')
        .set('DB_password','labmed2019'),
    });
    console.log(newRequest);
    return next.handle(newRequest);
  }

}
 