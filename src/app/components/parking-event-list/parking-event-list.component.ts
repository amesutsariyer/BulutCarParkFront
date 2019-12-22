import {Component, OnInit} from '@angular/core';
import {Subject} from 'rxjs';
import {UtilVariables} from '../../utils/util-variables';
import {ParkingEvent} from '../../models/parking-event-models';
import {ParkingEventService} from '../../services/parking-event.service';

@Component({
  selector: 'app-parking-event-list',
  templateUrl: './parking-event-list.component.html',
  styleUrls: ['./parking-event-list.component.scss']
})
export class ParkingEventListComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  parkingEvents: ParkingEvent[] = [];
  dtTrigger: Subject<any> = new Subject();

  constructor(public parkingEventService: ParkingEventService) {
  }

  ngOnInit() {
    this.dtOptions = UtilVariables.dtOptions;
    this.getAllParkingEvents();
  }

  getAllParkingEvents() {

    this.parkingEventService.getAllParkingEvents()
      .subscribe((res: any) => {

        this.parkingEvents = res.data;

        this.dtTrigger.next();

      }, error => {
        console.log(error);
      });

  }

}
