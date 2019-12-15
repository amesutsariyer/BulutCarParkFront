import {Component, OnInit} from '@angular/core';
import {LoginRequest} from '../models/login-models';
import {LoginService} from '../services/login.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginRequest = new LoginRequest();

  constructor(public loginService: LoginService, public router: Router) {

    loginService.subjectCall.subscribe(value => {
      if (value === 'ok') {
        this.router.navigateByUrl('/dashboard');
      }
    });
  }

  ngOnInit() {
    localStorage.clear();
  }

  submit() {
    this.loginService.login(this.loginRequest);
  }

}
