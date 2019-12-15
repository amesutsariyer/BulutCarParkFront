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
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    DataTablesModule,
    DigitOnlyModule
  ],
  providers: [
    LoginService,
    AccountService,
    ComponentListenerService,
    RoleService,
    BranchService,
    UserService,
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
