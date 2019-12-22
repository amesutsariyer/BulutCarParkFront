import {Injectable} from '@angular/core';
import {LoginResponse} from '../models/login-models';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ResponseWrap} from '../models/response-models';
import {Urls} from '../utils/urls';
import {Branch} from '../models/branch-models';

@Injectable({
  providedIn: 'root'
})
export class BranchService {

  httpOptions = {};

  constructor(public httpClient: HttpClient) {
  }

  getAllBranches() {

    let userCreds: LoginResponse;
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

  getBranch(id) {
    let userCreds: LoginResponse;
    userCreds = JSON.parse(localStorage.getItem('credentials'));

    this.httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': '*',
        'Access-Control-Allow-Headers': '*',
        Authorization: userCreds.tokenType + ' ' + userCreds.accessToken
      })
    };

    return this.httpClient.get<ResponseWrap>(Urls.branchApiURL + '/' + id, this.httpOptions);

  }

  saveBranch(branch: Branch) {
    let userCreds: LoginResponse;
    userCreds = JSON.parse(localStorage.getItem('credentials'));

    this.httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': '*',
        'Access-Control-Allow-Headers': '*',
        Authorization: userCreds.tokenType + ' ' + userCreds.accessToken
      })
    };

    return this.httpClient.post(Urls.branchApiURL, branch, this.httpOptions);

  }

  deleteBranch(id) {
    let userCreds: LoginResponse;
    userCreds = JSON.parse(localStorage.getItem('credentials'));

    this.httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': '*',
        'Access-Control-Allow-Headers': '*',
        Authorization: userCreds.tokenType + ' ' + userCreds.accessToken
      })
    };

    return this.httpClient.delete(Urls.branchApiURL + '/' + id, this.httpOptions);

  }

  getAvailableParkPointCount(id) {
    let userCreds: LoginResponse;
    userCreds = JSON.parse(localStorage.getItem('credentials'));

    this.httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': '*',
        'Access-Control-Allow-Headers': '*',
        Authorization: userCreds.tokenType + ' ' + userCreds.accessToken
      })
    };

    if (userCreds.role === 'ADMIN') {
      return this.httpClient.get<ResponseWrap>(Urls.branchAvailableApiURL + '/' + id, this.httpOptions);
    } else {
      return this.httpClient.get<ResponseWrap>(Urls.branchAvailableApiURL, this.httpOptions);
    }
  }

}
