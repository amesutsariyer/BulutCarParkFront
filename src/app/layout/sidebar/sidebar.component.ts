import {Component, OnInit} from '@angular/core';
import {AccountService} from '../../services/account.service';
import {User} from '../../models/user-models';
import {Router} from '@angular/router';
import {ComponentListenerService} from '../../services/component-listener.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  loggedUser = new User();

  constructor(public router: Router, public sidebarListener: ComponentListenerService, public accountService: AccountService) {
    accountService.subjectCall.subscribe((res: any) => {
      if (res === 'info') {
        this.loggedUser = JSON.parse(localStorage.getItem('user_info'));

      }
    });
  }

  ngOnInit() {
    this.getUserInfo();
  }

  routeWithComponent(pageName: any, componentName: any) {
    this.sidebarListener.next(pageName, componentName);
    this.router.navigateByUrl(pageName);
  }

  getUserInfo() {
    this.accountService.getUserInfo();
  }

  logout() {
    localStorage.clear();
    this.router.navigateByUrl('/login');
  }

}
