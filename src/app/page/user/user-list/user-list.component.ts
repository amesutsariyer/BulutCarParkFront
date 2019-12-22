import {Component, OnInit} from '@angular/core';
import {UserService} from '../../../services/user.service';
import {User} from '../../../models/user-models';
import {Subject} from 'rxjs';
import {ComponentListenerService} from '../../../services/component-listener.service';
import {UtilVariables} from '../../../utils/util-variables';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  // users = new Array<User>();
  users: User[] = [];
  dtTrigger: Subject<any> = new Subject();

  constructor(public userService: UserService, public componentListenerService: ComponentListenerService) {
  }

  ngOnInit() {
    this.dtOptions = UtilVariables.dtOptions;
    this.getAllUsers();
  }

  getAllUsers() {

    this.userService.getAllUsers().subscribe((res: any) => {

      this.users = res.data;

      this.dtTrigger.next();

    }, error => {
      console.log(error);
    });

  }

  prepareForUpdate(id) {
    this.componentListenerService.nextWithItemId('users', 'update', id);
  }

  prepareForDelete(id) {
    this.componentListenerService.nextWithItemId('users', 'delete', id);

  }
}
