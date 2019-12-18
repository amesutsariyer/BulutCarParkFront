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
    data: {child: 'user', allowedRoles: 'ADMIN,SUPERADMIN'}
  },
  {
    path: 'branches',
    component: PageComponent,
    canActivate: [LoginGuard],
    data: {child: 'branch', allowedRoles: 'ADMIN'}
  },
  {
    path: 'dashboard',
    component: PageComponent,
    canActivate: [LoginGuard],
    data: {child: 'dashboard'}
  },
  {
    path: 'pricing-periods',
    component: PageComponent,
    canActivate: [LoginGuard],
    data: {child: 'pricing-period', allowedRoles: 'ADMIN,SUPERADMIN'}
  },
  {
    path: 'pricings',
    component: PageComponent,
    canActivate: [LoginGuard],
    data: {child: 'pricing', allowedRoles: 'ADMIN,SUPERADMIN'}
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
