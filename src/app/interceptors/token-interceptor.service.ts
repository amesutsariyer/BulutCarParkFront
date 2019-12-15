import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Urls} from '../utils/urls';
import {Observable} from 'rxjs';
import {LoginResponse} from '../models/login-models';
import {Router} from '@angular/router';

@Injectable()
export class TokenInterceptorService implements HttpInterceptor {

  constructor(public router: Router) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    let userCreds = new LoginResponse();
    userCreds = JSON.parse(localStorage.getItem('credentials'));

    if (request.url.indexOf(Urls.loginApiURL) != -1) {
      return next.handle(request);
    }

    if (userCreds != null && userCreds.accessToken != null) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${userCreds.accessToken}`
        }
      });
    }
    return next.handle(request);
  }

}
