import {BaseModel} from './base-models';
import {Branch} from './branch-models';
import {User} from './user-models';

export class ParkingEvent extends BaseModel {

  licenseNumber: string;
  startDate: Date;
  endDate: Date;
  currentBranch: Branch;
  creator: User;

}

export class LicenseNumber {
  licenseNumber: string;
}
