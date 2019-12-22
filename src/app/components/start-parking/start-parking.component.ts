import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {ParkingEventService} from '../../services/parking-event.service';
import {LicenseNumber} from '../../models/parking-event-models';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-start-parking',
  templateUrl: './start-parking.component.html',
  styleUrls: ['./start-parking.component.scss']
})
export class StartParkingComponent implements OnInit {

  @Input('disabled') disabled: boolean;
  @ViewChild(NgForm, {static: false}) parkingEventForm: NgForm;

  regexp = new RegExp('^(0[1-9]|[1-7][0-9]|8[01])(([A-Z])(\\d{1,4})|([A-Z]{2})(\\d{2,4})|([A-Z]{3})(\\d{2,4}))$');

  licenseNumber = new LicenseNumber();

  isSuccess = false;
  hasError = false;
  message: string;

  constructor(public parkingEventService: ParkingEventService) {
  }

  ngOnInit() {
  }

  startParking() {

    this.parkingEventService
      .startParking(this.licenseNumber)
      .subscribe((res: any) => {
        this.isSuccess = res.data;
        this.hasError = false;
        this.parkingEventForm.resetForm(true);
      }, error => {
        this.isSuccess = false;
        this.hasError = true;
        this.message = error.error.errorDescription;
      });

  }

  toUpperCaseLN() {
    this.licenseNumber.licenseNumber = this.licenseNumber.licenseNumber.toUpperCase();
  }

}
