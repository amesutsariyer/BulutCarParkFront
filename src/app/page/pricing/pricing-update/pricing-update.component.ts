import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {FormControl, NgForm, Validators} from '@angular/forms';
import {Pricing, PricingPeriod} from '../../../models/pricing-models';
import {PricingService} from '../../../services/pricing.service';
import {PricingPeriodService} from '../../../services/pricing-period.service';
import {UtilVariables} from '../../../utils/util-variables';

@Component({
  selector: 'app-pricing-update',
  templateUrl: './pricing-update.component.html',
  styleUrls: ['./pricing-update.component.scss']
})
export class PricingUpdateComponent implements OnInit {

  @Input('id') id: number;

  @ViewChild(NgForm, {static: false}) editPricingForm: NgForm;

  formControl = new FormControl('', [
    Validators.required
  ]);

  isSuccessful = false;
  hasError = false;
  pricing = new Pricing();
  pricingPeriods: PricingPeriod[] = [];
  currencyMaskOptions = UtilVariables.currencyMaskOptions;

  compareFn = this._compareFn.bind(this);

  constructor(public pricingService: PricingService, public pricingPeriodService: PricingPeriodService) {
  }

  ngOnInit() {
    this.getPricing();
    this.getAllPricingPeriods();
  }

  getPricing() {
    this.pricingService.getPricing(this.id).subscribe((res: any) => {

      this.pricing = res.data;

    }, error => {
      console.log(error);
    });
  }

  updatePricing() {

    this.pricingService.savePricing(this.pricing).subscribe((res: any) => {
      this.isSuccessful = true;
      this.hasError = false;
      this.editPricingForm.resetForm(true);
    }, error => {
      this.hasError = true;
      this.isSuccessful = false;
      console.log(error);
    });
  }

  getAllPricingPeriods() {
    this.pricingPeriodService.getAllPricingPeriods().subscribe((res: any) => {
      this.pricingPeriods = res.data;
    }, error => {
      console.log(error);
    });
  }

  _compareFn(c1: any, c2: any): boolean {
    return c1 && c2 ? c1.id === c2.id : c1 === c2;
  }

}
