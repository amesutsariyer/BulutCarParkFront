import {BaseModel} from './base-models';

export class PricingPeriod extends BaseModel {

  start: number;
  end: number;

}

export class Pricing extends BaseModel {

  price: number;
  pricingPeriod: PricingPeriod;

}
