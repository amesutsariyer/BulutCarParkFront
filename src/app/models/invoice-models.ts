import {ParkingEvent} from './parking-event-models';
import {BaseModel} from './base-models';

export class Invoice extends BaseModel {
  paid: boolean;
  price: number;
  parkingEvent: ParkingEvent;
}
