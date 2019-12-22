export class UtilVariables {

  static currencyMaskOptions = {
    prefix: '₺ ',
    thousands: ',',
    decimal: '.',
    allowNegative: false,
    align: 'left'
  };

  static dtOptions = {
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

}
