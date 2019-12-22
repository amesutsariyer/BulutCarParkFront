import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SidebarComponent} from './layout/sidebar/sidebar.component';
import {LoginComponent} from './login/login.component';
import {PageComponent} from './page/page.component';
import {BranchComponent} from './page/branch/branch.component';
import {BranchListComponent} from './page/branch/branch-list/branch-list.component';
import {BranchAddComponent} from './page/branch/branch-add/branch-add.component';
import {BranchUpdateComponent} from './page/branch/branch-update/branch-update.component';
import {BranchDeleteComponent} from './page/branch/branch-delete/branch-delete.component';
import {UserComponent} from './page/user/user.component';
import {UserListComponent} from './page/user/user-list/user-list.component';
import {UserAddComponent} from './page/user/user-add/user-add.component';
import {UserUpdateComponent} from './page/user/user-update/user-update.component';
import {UserDeleteComponent} from './page/user/user-delete/user-delete.component';
import {FormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {LoginService} from './services/login.service';
import {DashboardComponent} from './page/dashboard/dashboard.component';
import {ComponentListenerService} from './services/component-listener.service';
import {AccountService} from './services/account.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {TokenInterceptorService} from './interceptors/token-interceptor.service';
import {LoaderInterceptorService} from './interceptors/loader-interceptor.service';
import {DataTablesModule} from 'angular-datatables';
import {RoleService} from './services/role.service';
import {BranchService} from './services/branch.service';
import {UserService} from './services/user.service';
import {DigitOnlyModule} from '@uiowa/digit-only';
import {PricingPeriodListComponent} from './page/pricing-period/pricing-period-list/pricing-period-list.component';
import {PricingPeriodAddComponent} from './page/pricing-period/pricing-period-add/pricing-period-add.component';
import {PricingPeriodUpdateComponent} from './page/pricing-period/pricing-period-update/pricing-period-update.component';
import {PricingPeriodDeleteComponent} from './page/pricing-period/pricing-period-delete/pricing-period-delete.component';
import {PricingPeriodComponent} from './page/pricing-period/pricing-period.component';
import {PricingPeriodService} from './services/pricing-period.service';
import {PricingComponent} from './page/pricing/pricing.component';
import {PricingListComponent} from './page/pricing/pricing-list/pricing-list.component';
import {PricingAddComponent} from './page/pricing/pricing-add/pricing-add.component';
import {PricingUpdateComponent} from './page/pricing/pricing-update/pricing-update.component';
import {PricingDeleteComponent} from './page/pricing/pricing-delete/pricing-delete.component';
import {CurrencyMaskModule} from 'ng2-currency-mask';
import {PricingListModalComponent} from './components/pricing-list-modal/pricing-list-modal.component';
import {AngularMultiSelectModule} from 'angular2-multiselect-dropdown';
import {StartParkingComponent} from './components/start-parking/start-parking.component';
import {StopParkingComponent} from './components/stop-parking/stop-parking.component';
import {NavbarComponent} from './layout/navbar/navbar.component';
import {ChangePasswordComponent} from './components/change-password/change-password.component';
import {ParkingEventListComponent} from './components/parking-event-list/parking-event-list.component';
import {InvoiceListComponent} from './components/invoice-list/invoice-list.component';
import {PasswordMatchDirective} from './directives/password-match.directive';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    LoginComponent,
    PageComponent,
    BranchComponent,
    BranchListComponent,
    BranchAddComponent,
    BranchUpdateComponent,
    BranchDeleteComponent,
    UserComponent,
    UserListComponent,
    UserAddComponent,
    UserUpdateComponent,
    UserDeleteComponent,
    DashboardComponent,
    PricingPeriodListComponent,
    PricingPeriodAddComponent,
    PricingPeriodUpdateComponent,
    PricingPeriodDeleteComponent,
    PricingPeriodComponent,
    PricingComponent,
    PricingListComponent,
    PricingAddComponent,
    PricingUpdateComponent,
    PricingDeleteComponent,
    PricingListModalComponent,
    StartParkingComponent,
    StopParkingComponent,
    NavbarComponent,
    ChangePasswordComponent,
    ParkingEventListComponent,
    InvoiceListComponent,
    PasswordMatchDirective
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    DataTablesModule,
    DigitOnlyModule,
    CurrencyMaskModule
  ],
  providers: [
    LoginService,
    AccountService,
    ComponentListenerService,
    RoleService,
    BranchService,
    UserService,
    AngularMultiSelectModule,
    PricingPeriodService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoaderInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
