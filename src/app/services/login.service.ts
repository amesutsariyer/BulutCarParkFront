import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {LoginRequest, LoginResponse} from '../models/login-models';
import {Urls} from '../utils/urls';
import {Security} from '../utils/security';
import {BehaviorSubject} from 'rxjs';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': '*',
      'Access-Control-Allow-Headers': '*',
      Authorization: 'Basic ' + btoa(Security.clientId + ':' + Security.clientSecret),
    })
  };
  private subject: BehaviorSubject<any> = new BehaviorSubject<any>([]);
  public subjectCall = this.subject.asObservable();

  constructor(public httpClient: HttpClient, public router: Router) {
  }

  login(loginRequest: LoginRequest) {

    const body = new FormData();

    body.append('username', loginRequest.username);
    body.append('password', loginRequest.password);
    body.append('grant_type', loginRequest.grantType);

    this.httpClient.post(Urls.loginApiURL, body, this.httpOptions)
      .subscribe((res: any) => {
        const loginResponse = new LoginResponse();
        loginResponse.accessToken = res.access_token;
        loginResponse.role = res.role;
        loginResponse.scope = res.scope;
        loginResponse.tokenType = res.token_type;
        loginResponse.firstLogin = res.first_login;
        localStorage.clear();
        localStorage.setItem('credentials', JSON.stringify(loginResponse));
        // this.subject.next('ok');
        this.router.navigateByUrl('/dashboard');
      }, error => {
        console.log(error);
      });
  }

}
