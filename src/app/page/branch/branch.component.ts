import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-branch',
  templateUrl: './branch.component.html',
  styleUrls: ['./branch.component.scss']
})
export class BranchComponent implements OnInit {

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
