import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpHandler, HttpEvent, HttpRequest, HttpResponse, HttpErrorResponse } from "@angular/common/http";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";
import { Router } from "@angular/router";


@Injectable({
  providedIn: 'root'
})
export class ApiInterceptor implements HttpInterceptor {

  constructor(private readonly router: Router) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser && currentUser.token) {
      req = req.clone({
        setHeaders: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${currentUser.token}`
        }
      });
    }

    return next.handle(req).pipe(
      tap(
        event => {
          if (event instanceof HttpResponse) {
            console.log('Server response: ', event.body);
          }
        },
        err => {
          console.log(err);
          if (err instanceof HttpErrorResponse) {
            if (err.status == 401) {
              localStorage.removeItem('currentUser');
              localStorage.removeItem('isLogged');
              this.router.navigate(['login']);
            }

            if (err.status == 500)
              console.log('Server Error', err);
          }
        }));
  }
}
