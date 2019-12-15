import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {PageComponent} from './page/page.component';
import {LoginGuard} from './guard/login.guard';


const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'users',
    component: PageComponent,
    canActivate: [LoginGuard],
    data: {child: 'user', expectedRoles: 'ADMIN,SUPERADMIN'}
  },
  {
    path: 'branches',
    component: PageComponent,
    canActivate: [LoginGuard],
    data: {child: 'branch', expectedRoles: 'ADMIN'}
  },
  {
    path: 'dashboard',
    component: PageComponent,
    canActivate: [LoginGuard],
    data: {child: 'dashboard'}
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
