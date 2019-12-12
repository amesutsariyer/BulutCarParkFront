import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-branch-update',
  templateUrl: './branch-update.component.html',
  styleUrls: ['./branch-update.component.scss']
})
export class BranchUpdateComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log('update rendered.');
  }

}
