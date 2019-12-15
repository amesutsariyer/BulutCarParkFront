import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {BehaviorSubject} from 'rxjs';
import {LoginResponse} from '../models/login-models';
import {ResponseWrap} from '../models/response-models';
import {Urls} from '../utils/urls';
import {User} from '../models/user-models';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  httpOptions = {};
  private subject: BehaviorSubject<any> = new BehaviorSubject<any>([]);
  public subjectCall = this.subject.asObservable();

  constructor(public httpClient: HttpClient) {
  }

  getAllUsers() {
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

    return this.httpClient.get<ResponseWrap>(Urls.userApiURL, this.httpOptions);

  }

  getUser(id) {
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

    return this.httpClient.get<ResponseWrap>(Urls.userApiURL + '/' + id, this.httpOptions);

  }

  createUser(user: User) {
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

    return this.httpClient.post(Urls.userApiURL, user, this.httpOptions);

  }

  updateUser(user: User) {
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

    return this.httpClient.put(Urls.userApiURL, user, this.httpOptions);

  }

  deleteUser(id) {
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

    return this.httpClient.delete(Urls.userApiURL + '/' + id, this.httpOptions);

  }

}
