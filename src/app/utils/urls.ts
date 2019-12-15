import {environment} from '../../environments/environment';

export class Urls {


  private static apiRoot = environment.apiRoot;
  public static loginApiURL = Urls.apiRoot + '/oauth/token';
  public static branchApiURL = Urls.apiRoot + '/branches';
  public static userApiURL = Urls.apiRoot + '/users';
  public static roleApiURL = Urls.apiRoot + '/roles';
  public static invoiceApiURL = Urls.apiRoot + '/invoices';
  public static pricingApiURL = Urls.apiRoot + '/pricing';
  public static pricingPeriodsApiURL = Urls.apiRoot + '/pricing-periods';

  public static parkingEventApiURL = Urls.apiRoot + '/parking-events';
  public static startParkingEventApiURL = Urls.parkingEventApiURL + '/start';
  public static activeParkingEventApiURL = Urls.parkingEventApiURL + '/active';

  public static accountApiURL = Urls.apiRoot + '/account';
  public static userInfoApiURL = Urls.accountApiURL + '/info';

}
