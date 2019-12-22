import {Component, OnInit} from '@angular/core';
import {ComponentListenerService} from '../../services/component-listener.service';

@Component({
  selector: 'app-branch',
  templateUrl: './branch.component.html',
  styleUrls: ['./branch.component.scss']
})
export class BranchComponent implements OnInit {

  active = 'list';
  itemId: any;

  constructor(public sidebarListener: ComponentListenerService) {

    sidebarListener.componentCall.subscribe((res: any) => {
      if (res === 'branches-add') {
        this.active = 'add';
      } else if (res.indexOf('branches-update') >= 0) {
        this.active = 'update';

        const response = res.split('-');
        this.itemId = response[response.length - 1];
      } else if (res.indexOf('branches-delete') >= 0) {
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
