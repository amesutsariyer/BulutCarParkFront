import {Component, OnInit, ViewChild} from '@angular/core';
import {FormControl, NgForm, Validators} from '@angular/forms';
import {PasswordModel} from '../../models/account-models';
import {AccountService} from '../../services/account.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {

  constructor(public accountService: AccountService) {
  }

  @ViewChild(NgForm, {static: false}) changePasswordForm: NgForm;
  formControl = new FormControl('', [
    Validators.required
  ]);

  passwordPattern = new RegExp('^(?=(?:\\D*\\d){1})(?=(?:[^a-z]*[a-z]){1})(?=(?:[^A-Z]*[A-Z]){1})(?=(?:[^!@#$%^&*+=]*[!@#$%^&*+=]){0}).{8,}$');

  isSuccessful = false;
  hasError = false;
  passwordModel = new PasswordModel();

  ngOnInit() {
  }

  changePassword() {

    this.accountService.changePassword(this.passwordModel)
      .subscribe((res: any) => {
        this.isSuccessful = res.data;
        this.hasError = false;
      }, error => {
        this.isSuccessful = false;
        this.hasError = true;
      });

  }

}
