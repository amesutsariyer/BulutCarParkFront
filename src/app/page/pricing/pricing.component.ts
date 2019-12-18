import {Component, OnInit} from '@angular/core';
import {ComponentListenerService} from '../../services/component-listener.service';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss']
})
export class PricingComponent implements OnInit {

  active = 'list';
  itemId: any;

  constructor(public sidebarListener: ComponentListenerService) {
    sidebarListener.sidebarCall.subscribe((res: any) => {
      if (res === 'pricings-add') {
        this.active = 'add';
      } else if (res.indexOf('pricings-update') >= 0) {
        this.active = 'update';

        const response = res.split('-');
        this.itemId = response[response.length - 1];
      } else if (res.indexOf('pricings-delete') >= 0) {
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

}
