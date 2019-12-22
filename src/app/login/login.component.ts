import {Component, OnInit} from '@angular/core';
import {LoginRequest} from '../models/login-models';
import {LoginService} from '../services/login.service';
import {Router} from '@angular/router';
import {ComponentListenerService} from '../services/component-listener.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginRequest = new LoginRequest();

  hasError = false;

  constructor(public loginService: LoginService, public router: Router, public componentListener: ComponentListenerService) {

    loginService.subjectCall.subscribe(value => {
      if (value === 'ok') {
        this.router.navigateByUrl('/dashboard');
      } else if (value === 'invalid_grant') {
        this.hasError = true;
      }
    });
  }

  ngOnInit() {
    localStorage.clear();
    this.hasError = false;
    this.componentListener.next('login', 'login');
  }

  submit() {
    this.loginService.login(this.loginRequest);
  }

}
