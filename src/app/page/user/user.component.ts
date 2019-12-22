import {Component, OnInit} from '@angular/core';
import {ComponentListenerService} from '../../services/component-listener.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  active = 'list';
  itemId: any;

  constructor(public sidebarListener: ComponentListenerService) {

    sidebarListener.componentCall.subscribe((res: any) => {
      if (res === 'users-add') {
        this.active = 'add';
      } else if (res.indexOf('users-update') >= 0) {
        this.active = 'update';

        const response = res.split('-');
        this.itemId = response[response.length - 1];
      } else if (res.indexOf('users-delete') >= 0) {
        this.active = 'delete';

        const response = res.split('-');
        this.itemId = response[response.length - 1];
      }
    });

  }

  ngOnInit() {
  }

  openListComponent() {
    this.active = 'list';
  }

  openAddComponent() {
    this.active = 'add';
  }

  openUpdateComponent() {
    this.active = 'update';
  }

  openDeleteComponent() {
    this.active = 'delete';
  }

}
