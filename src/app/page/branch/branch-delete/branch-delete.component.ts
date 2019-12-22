import {Component, Input, OnInit} from '@angular/core';
import {BranchService} from '../../../services/branch.service';
import {Branch} from '../../../models/branch-models';

@Component({
  selector: 'app-branch-delete',
  templateUrl: './branch-delete.component.html',
  styleUrls: ['./branch-delete.component.scss']
})
export class BranchDeleteComponent implements OnInit {

  @Input('id') id: number;
  branch = new Branch();
  isSuccessful = false;

  constructor(public branchService: BranchService) {
  }

  ngOnInit() {
    this.getUser();
  }

  getUser() {
    this.branchService.getBranch(this.id).subscribe((res: any) => {

      this.branch = res.data;

    }, error => {
      console.log(error);
    });
  }

  deleteBranch() {
    this.branchService.deleteBranch(this.id)
      .subscribe((res: any) => {

        this.isSuccessful = true;

      }, error => {
        console.log(error);
      });
  }


}
