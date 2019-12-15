import {Role} from './role-models';
import {Branch} from './branch-models';
import {BaseModel} from './base-models';

export class User extends BaseModel {

  email: string;
  phoneNumber: string;
  identityNumber: string;
  name: string;
  surname: string;
  role: Role;
  relatedBranch: Branch;

}
