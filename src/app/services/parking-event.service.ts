import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {LoginResponse} from '../models/login-models';
import {ResponseWrap} from '../models/response-models';
import {Urls} from '../utils/urls';
import {LicenseNumber} from '../models/parking-event-models';

@Injectable({
  providedIn: 'root'
})
export class ParkingEventService {

  httpOptions = {};

  constructor(public httpClient: HttpClient) {
  }

  getAllParkingEvents() {
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

    return this.httpClient.get<ResponseWrap>(Urls.parkingEventApiURL, this.httpOptions);

  }

  getParkingEvent(id) {
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

    return this.httpClient.get<ResponseWrap>(Urls.parkingEventApiURL + '/' + id, this.httpOptions);

  }

  startParking(licenseNumber: LicenseNumber) {
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

    return this.httpClient.post(Urls.startParkingEventApiURL, licenseNumber, this.httpOptions);

  }

  getActiveParking(licenseNumber: LicenseNumber) {
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

    return this.httpClient.post(Urls.activeParkingEventApiURL, licenseNumber, this.httpOptions);

  }

}
