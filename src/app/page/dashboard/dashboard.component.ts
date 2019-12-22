import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() {
  }

  activeList = 'event';

  ngOnInit() {
  }

  openInvoiceList() {
    this.activeList = 'invoice';
  }

  openEventList() {
    this.activeList = 'event';
  }

}
