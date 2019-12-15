import {Component, OnInit} from '@angular/core';
import {UserService} from '../../../services/user.service';
import {User} from '../../../models/user-models';
import {Subject} from 'rxjs';
import {ComponentListenerService} from '../../../services/component-listener.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  // users = new Array<User>();
  users: User[] = [];
  dtTrigger: Subject<any> = new Subject();

  constructor(public userService: UserService, public componentListenerService: ComponentListenerService) {
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
    this.getAllUsers();
  }

  getAllUsers() {

    this.userService.getAllUsers().subscribe((res: any) => {

      this.users = res.data;

      this.dtTrigger.next();

    }, error => {
      console.log(error);
    });

  }

  prepareForUpdate(id) {
    this.componentListenerService.next('users', 'update', id);
  }

  prepareForDelete(id) {
    this.componentListenerService.next('users', 'delete', id);

  }
}
