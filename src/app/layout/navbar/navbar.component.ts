import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ComponentListenerService} from '../../services/component-listener.service';
import {AccountService} from '../../services/account.service';
import {User} from '../../models/user-models';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  loggedUser = new User();

  constructor(public router: Router, public sidebarListener: ComponentListenerService, public accountService: AccountService) {
    accountService.subjectCall.subscribe((res: any) => {
      if (res === 'info') {
        this.loggedUser = JSON.parse(localStorage.getItem('user_info'));
      }
    });
  }

  ngOnInit() {
  }

}
