import {Component, Input, OnInit} from '@angular/core';
import {Pricing} from '../../../models/pricing-models';
import {PricingService} from '../../../services/pricing.service';

@Component({
  selector: 'app-pricing-delete',
  templateUrl: './pricing-delete.component.html',
  styleUrls: ['./pricing-delete.component.scss']
})
export class PricingDeleteComponent implements OnInit {

  @Input('id') id: number;
  pricing = new Pricing();
  isSuccessful = false;

  constructor(public pricingService: PricingService) {
  }

  ngOnInit() {
    this.getPricingPeriod();
  }

  getPricingPeriod() {
    this.pricingService.getPricing(this.id).subscribe((res: any) => {

      this.pricing = res.data;

    }, error => {
      console.log(error);
    });
  }

  deletePricingPeriod() {
    this.pricingService.deletePricing(this.id)
      .subscribe((res: any) => {

        this.isSuccessful = true;

      }, error => {
        console.log(error);
      });
  }

}
