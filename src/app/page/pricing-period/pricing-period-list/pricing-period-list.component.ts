import {Component, OnInit} from '@angular/core';
import {Subject} from 'rxjs';
import {PricingPeriod} from '../../../models/pricing-models';
import {ComponentListenerService} from '../../../services/component-listener.service';
import {PricingPeriodService} from '../../../services/pricing-period.service';
import {UtilVariables} from '../../../utils/util-variables';

@Component({
  selector: 'app-pricing-period-list',
  templateUrl: './pricing-period-list.component.html',
  styleUrls: ['./pricing-period-list.component.scss']
})
export class PricingPeriodListComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  pricingPeriods: PricingPeriod[] = [];
  dtTrigger: Subject<any> = new Subject();

  constructor(public pricingPeriodService: PricingPeriodService, public componentListenerService: ComponentListenerService) {
  }

  ngOnInit() {

    this.dtOptions = UtilVariables.dtOptions;
    this.getAllPricingPeriods();
  }

  getAllPricingPeriods() {

    this.pricingPeriodService.getAllPricingPeriods().subscribe((res: any) => {

      this.pricingPeriods = res.data;

      this.dtTrigger.next();

    }, error => {
      console.log(error);
    });

  }

  prepareForUpdate(id) {
    this.componentListenerService.nextWithItemId('pricing-periods', 'update', id);
  }

  prepareForDelete(id) {
    this.componentListenerService.nextWithItemId('pricing-periods', 'delete', id);

  }

}
