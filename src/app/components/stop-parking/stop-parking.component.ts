import {AfterViewInit, Component, Input, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {LicenseNumber} from '../../models/parking-event-models';
import {InvoiceService} from '../../services/invoice.service';
import {Invoice} from '../../models/invoice-models';

@Component({
  selector: 'app-stop-parking',
  templateUrl: './stop-parking.component.html',
  styleUrls: ['./stop-parking.component.scss']
})
export class StopParkingComponent implements OnInit, AfterViewInit {

  @Input('disabled') disabled: boolean;
  @ViewChild(NgForm, {static: false}) parkingEventForm: NgForm;

  regexp = new RegExp('^(0[1-9]|[1-7][0-9]|8[01])(([A-Z])(\\d{1,4})|([A-Z]{2})(\\d{2,4})|([A-Z]{3})(\\d{2,4}))$');

  licenseNumber = new LicenseNumber();

  invoice: Invoice = null;

  isSuccess = false;
  hasError = false;
  message: any;

  constructor(public invoiceService: InvoiceService) {
  }

  ngOnInit() {

  }

  ngAfterViewInit() {

  }

  getInvoice() {
    this.invoiceService
      .bill(this.licenseNumber)
      .subscribe((res: any) => {
        this.invoice = res.data;
        this.isSuccess = true;
        this.hasError = false;
        this.message = 'Fatura kesildi, ödemeyi nakit olarak gerçekleştiriniz ve onaylayınız.';
      }, error => {
        this.isSuccess = false;
        this.hasError = true;
        this.message = error.error.errorDescription;
      });
  }

  confirmInvoice() {
    this.invoiceService
      .confirmInvoice(this.invoice.id)
      .subscribe((res: any) => {
        this.invoice = res.data;
        this.isSuccess = true;
        this.hasError = false;
        this.message = 'Ödeme onaylandı.';
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
