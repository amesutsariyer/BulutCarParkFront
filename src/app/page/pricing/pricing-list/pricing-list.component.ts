import {Component, OnInit} from '@angular/core';
import {Pricing} from '../../../models/pricing-models';
import {Subject} from 'rxjs';
import {ComponentListenerService} from '../../../services/component-listener.service';
import {PricingService} from '../../../services/pricing.service';

@Component({
  selector: 'app-pricing-list',
  templateUrl: './pricing-list.component.html',
  styleUrls: ['./pricing-list.component.scss']
})
export class PricingListComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  pricings: Pricing[] = [];
  dtTrigger: Subject<any> = new Subject();

  constructor(public pricingService: PricingService, public componentListenerService: ComponentListenerService) {
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

    this.pricingService.getAllPricings().subscribe((res: any) => {

      this.pricings = res.data;

      this.dtTrigger.next();

    }, error => {
      console.log(error);
    });

  }

  prepareForUpdate(id) {
    this.componentListenerService.nextWithItemId('pricings', 'update', id);
  }

  prepareForDelete(id) {
    this.componentListenerService.nextWithItemId('pricings', 'delete', id);

  }

}
