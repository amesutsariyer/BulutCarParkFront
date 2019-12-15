import {Component, Input, OnInit} from '@angular/core';
import {UserService} from '../../../services/user.service';
import {User} from '../../../models/user-models';

@Component({
  selector: 'app-user-delete',
  templateUrl: './user-delete.component.html',
  styleUrls: ['./user-delete.component.scss']
})
export class UserDeleteComponent implements OnInit {

  @Input('id') id: number;
  user = new User();
  isSuccessful = false;

  constructor(public userService: UserService) {
  }

  ngOnInit() {
    this.getUser();
  }

  getUser() {
    this.userService.getUser(this.id).subscribe((res: any) => {

      this.user = res.data;

    }, error => {
      console.log(error);
    });
  }

  deleteUser() {
    this.userService.deleteUser(this.id)
      .subscribe((res: any) => {

        this.isSuccessful = true;

      }, error => {
        console.log(error);
      });
  }

}
