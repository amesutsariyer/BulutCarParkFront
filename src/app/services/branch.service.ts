import {Injectable} from '@angular/core';
import {LoginResponse} from '../models/login-models';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ResponseWrap} from '../models/response-models';
import {Urls} from '../utils/urls';

@Injectable({
  providedIn: 'root'
})
export class BranchService {

  httpOptions = {};

  constructor(public httpClient: HttpClient) {
  }

  getAllBranches() {

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

    return this.httpClient.get<ResponseWrap>(Urls.branchApiURL, this.httpOptions);
  }

}
