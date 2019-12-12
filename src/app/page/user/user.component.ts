import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor() {
  }

  active: string = 'list';

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
