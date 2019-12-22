import {Component, OnInit} from '@angular/core';
import {Subject} from 'rxjs';
import {UtilVariables} from '../../utils/util-variables';
import {Invoice} from '../../models/invoice-models';
import {InvoiceService} from '../../services/invoice.service';

@Component({
  selector: 'app-invoice-list',
  templateUrl: './invoice-list.component.html',
  styleUrls: ['./invoice-list.component.scss']
})
export class InvoiceListComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  invoices: Invoice[] = [];
  dtTrigger: Subject<any> = new Subject();

  constructor(public invoiceService: InvoiceService) {
  }

  ngOnInit() {
    this.dtOptions = UtilVariables.dtOptions;
    this.getAllInvoices();
  }

  getAllInvoices() {

    this.invoiceService.getAllInvoices().subscribe((res: any) => {

      this.invoices = res.data;

      this.dtTrigger.next();

    }, error => {
      console.log(error);
    });

  }
}
