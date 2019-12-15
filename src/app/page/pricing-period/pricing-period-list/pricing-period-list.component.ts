import {Component, OnInit} from '@angular/core';
import {Subject} from 'rxjs';
import {PricingPeriod} from '../../../models/pricing-models';
import {ComponentListenerService} from '../../../services/component-listener.service';
import {PricingPeriodService} from '../../../services/pricing-period.service';

@Component({
  selector: 'app-pricing-period-list',
  templateUrl: './pricing-period-list.component.html',
  styleUrls: ['./pricing-period-list.component.scss']
})
export class PricingPeriodListComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  pricingPeriods: PricingPeriod[] = [];
  dtTrigger: Subject<any> = new Subject();

  constructor(public pricingPeriodService: PricingPeriodService, public componentListenerService: ComponentListenerService) {
  }

  ngOnInit() {

    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      dom: 'Bfrtip',
      language: {
        processing: 'İşleniyor...',
        search: 'Arama:',
        lengthMenu: 'Sayfa başına _MENU_ kayıt',
        info: '_TOTAL_ öğenin _START_ ile _END_ arası gösteriliyor',
        infoEmpty: 'Hiçbir öğe gösterilmiyor.',
        infoFiltered: '(filtre uygulanmış toplam eleman: _MAX_ )',
        infoPostFix: '',
        loadingRecords: 'Kayıtlar yükleniyor ...',
        zeroRecords: 'Kayıt bulunamadı',
        emptyTable: 'Kayıt bulunamadı',
        paginate: {
          first: 'İlk',
          previous: 'Önceki',
          next: 'Sonraki',
          last: 'Son'
        },
        aria: {
          sortAscending: ': Tabloyu artan sırada sıralamak için etkinleştir',
          sortDescending: ': Tabloyu azalan sırada sıralamak için etkinleştir'
        }
      }
    };
    this.getAllPricingPeriods();
  }

  getAllPricingPeriods() {

    this.pricingPeriodService.getAllPricingPeriods().subscribe((res: any) => {

      this.pricingPeriods = res.data;

      this.dtTrigger.next();

    }, error => {
      console.log(error);
    });

  }

  prepareForUpdate(id) {
    this.componentListenerService.nextWithItemId('pricing-periods', 'update', id);
  }

  prepareForDelete(id) {
    this.componentListenerService.nextWithItemId('pricing-periods', 'delete', id);

  }

}
