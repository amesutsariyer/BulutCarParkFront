import {Component, Input, OnInit} from '@angular/core';
import {PricingPeriod} from '../../../models/pricing-models';
import {PricingPeriodService} from '../../../services/pricing-period.service';

@Component({
  selector: 'app-pricing-period-delete',
  templateUrl: './pricing-period-delete.component.html',
  styleUrls: ['./pricing-period-delete.component.scss']
})
export class PricingPeriodDeleteComponent implements OnInit {

  @Input('id') id: number;
  pricingPeriod = new PricingPeriod();
  isSuccessful = false;

  constructor(public pricingPeriodService: PricingPeriodService) {
  }

  ngOnInit() {
    this.getPricingPeriod();
  }

  getPricingPeriod() {
    this.pricingPeriodService.getPricingPeriod(this.id).subscribe((res: any) => {

      this.pricingPeriod = res.data;

    }, error => {
      console.log(error);
    });
  }

  deletePricingPeriod() {
    this.pricingPeriodService.deletePricingPeriod(this.id)
      .subscribe((res: any) => {

        this.isSuccessful = true;

      }, error => {
        console.log(error);
      });
  }

}
