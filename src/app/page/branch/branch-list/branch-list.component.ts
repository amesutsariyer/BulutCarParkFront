import {Component, OnInit} from '@angular/core';
import {Subject} from 'rxjs';
import {ComponentListenerService} from '../../../services/component-listener.service';
import {Branch} from '../../../models/branch-models';
import {BranchService} from '../../../services/branch.service';
import {UtilVariables} from '../../../utils/util-variables';

@Component({
  selector: 'app-branch-list',
  templateUrl: './branch-list.component.html',
  styleUrls: ['./branch-list.component.scss']
})
export class BranchListComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  branches: Branch[] = [];
  dtTrigger: Subject<any> = new Subject();

  constructor(public branchService: BranchService, public componentListenerService: ComponentListenerService) {
  }

  ngOnInit() {
    this.dtOptions = UtilVariables.dtOptions;
    this.getAllUsers();
  }

  getAllUsers() {

    this.branchService.getAllBranches().subscribe((res: any) => {

      this.branches = res.data;

      this.dtTrigger.next();

    }, error => {
      console.log(error);
    });

  }

  prepareForUpdate(id) {
    this.componentListenerService.nextWithItemId('branches', 'update', id);
  }

  prepareForDelete(id) {
    this.componentListenerService.nextWithItemId('branches', 'delete', id);

  }

}
