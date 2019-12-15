import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {tap} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {UtilMethods} from '../utils/util-methods';

@Injectable({
  providedIn: 'root'
})
export class LoaderInterceptorService implements HttpInterceptor {
  private utilMethods = new UtilMethods();

  constructor() {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.showLoader();
    return next.handle(req).pipe(tap((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          this.onEnd();
        }
      },
      (err: any) => {
        this.onEnd();
      }));
  }

  private onEnd(): void {
    this.hideLoader();
  }

  private showLoader(): void {
    this.utilMethods.loadingScreen('show');
  }

  private hideLoader(): void {
    this.utilMethods.loadingScreen('hide');
  }
}
