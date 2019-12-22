import {Component, Input, OnInit} from '@angular/core';
import {Branch} from '../../models/branch-models';

@Component({
  selector: 'pricing-list-modal',
  templateUrl: './pricing-list-modal.component.html',
  styleUrls: ['./pricing-list-modal.component.scss']
})
export class PricingListModalComponent implements OnInit {

  @Input('branch') branch: Branch;

  constructor() {
  }

  ngOnInit() {
  }

}
