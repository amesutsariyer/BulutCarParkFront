import {Component, OnInit} from '@angular/core';
import {ComponentListenerService} from '../../services/component-listener.service';

@Component({
  selector: 'app-branch',
  templateUrl: './branch.component.html',
  styleUrls: ['./branch.component.scss']
})
export class BranchComponent implements OnInit {

  active = 'list';

  constructor(public sidebarListener: ComponentListenerService) {

    sidebarListener.sidebarCall.subscribe((res: any) => {
      if (res === 'branches-add') {
        this.active = 'add';
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
