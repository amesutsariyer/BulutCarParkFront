import {Component, OnInit} from '@angular/core';
import {Pricing} from '../../../models/pricing-models';
import {Subject} from 'rxjs';
import {ComponentListenerService} from '../../../services/component-listener.service';
import {PricingService} from '../../../services/pricing.service';
import {UtilVariables} from '../../../utils/util-variables';

@Component({
  selector: 'app-pricing-list',
  templateUrl: './pricing-list.component.html',
  styleUrls: ['./pricing-list.component.scss']
})
export class PricingListComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  pricings: Pricing[] = [];
  dtTrigger: Subject<any> = new Subject();

  constructor(public pricingService: PricingService, public componentListenerService: ComponentListenerService) {
  }

  ngOnInit() {

    this.dtOptions = UtilVariables.dtOptions;
    this.getAllPricingPeriods();
  }

  getAllPricingPeriods() {

    this.pricingService.getAllPricings().subscribe((res: any) => {

      this.pricings = res.data;

      this.dtTrigger.next();

    }, error => {
      console.log(error);
    });

  }

  prepareForUpdate(id) {
    this.componentListenerService.nextWithItemId('pricings', 'update', id);
  }

  prepareForDelete(id) {
    this.componentListenerService.nextWithItemId('pricings', 'delete', id);

  }

}
