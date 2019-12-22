import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {LoginResponse} from '../models/login-models';
import {BehaviorSubject} from 'rxjs';
import {Urls} from '../utils/urls';
import {ResponseWrap} from '../models/response-models';
import {PasswordModel} from '../models/account-models';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  httpOptions = {};
  private subject: BehaviorSubject<any> = new BehaviorSubject<any>([]);
  public subjectCall = this.subject.asObservable();

  constructor(public httpClient: HttpClient) {
  }

  getUserInfo() {

    let userCreds = new LoginResponse();
    userCreds = JSON.parse(localStorage.getItem('credentials'));

    this.httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': '*',
        'Access-Control-Allow-Headers': '*',
        Authorization: userCreds.tokenType + ' ' + userCreds.accessToken
      })
    };

    let responseWrap = new ResponseWrap();

    this.httpClient.get<ResponseWrap>(Urls.userInfoApiURL, this.httpOptions)
      .subscribe((res: any) => {

        responseWrap = res;
        const user = responseWrap.data;
        localStorage.setItem('user_info', JSON.stringify(user));
        this.subject.next('info');


      }, error => {
        console.log(error);
      });

  }

  changePassword(passwordModel: PasswordModel) {
    let userCreds = new LoginResponse();
    userCreds = JSON.parse(localStorage.getItem('credentials'));

    this.httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': '*',
        'Access-Control-Allow-Headers': '*',
        Authorization: userCreds.tokenType + ' ' + userCreds.accessToken
      })
    };

    return this.httpClient.post(Urls.changePasswordApiURL, passwordModel, this.httpOptions);

  }

}
