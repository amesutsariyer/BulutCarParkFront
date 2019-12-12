import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SidebarComponent} from './layout/sidebar/sidebar.component';
import {LoginComponent} from './login/login.component';
import { PageComponent } from './page/page.component';
import { BranchComponent } from './page/branch/branch.component';
import { BranchListComponent } from './page/branch/branch-list/branch-list.component';
import { BranchAddComponent } from './page/branch/branch-add/branch-add.component';
import { BranchUpdateComponent } from './page/branch/branch-update/branch-update.component';
import { BranchDeleteComponent } from './page/branch/branch-delete/branch-delete.component';
import { UserComponent } from './page/user/user.component';
import { UserListComponent } from './page/user/user-list/user-list.component';
import { UserAddComponent } from './page/user/user-add/user-add.component';
import { UserUpdateComponent } from './page/user/user-update/user-update.component';
import { UserDeleteComponent } from './page/user/user-delete/user-delete.component';

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
    UserDeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
