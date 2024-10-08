import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    //throw new Error('Method not implemented.');

    let token = 'QItw0itoXoiY6JDIEQUXwPR9lpMlQFkPCnKaq!sD4Dyu!X$JEAADqyrsKQ0fup4j';

   let jwttoken = req.clone({
    setHeaders: {
      Authorization: 'bearer '+ token,
    }
   });
   //console.log(jwttoken);
   return next.handle(jwttoken);
  }
}