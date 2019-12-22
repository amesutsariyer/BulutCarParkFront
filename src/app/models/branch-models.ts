import {BaseModel} from './base-models';
import {Pricing} from './pricing-models';

export class Branch extends BaseModel {

  name: string;
  address: string;
  pricingList: Pricing[];
  parkPointCount: number;
  availableParkPointCount: number;

}
