import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    const userCreds = JSON.parse(localStorage.getItem('credentials'));

    const expectedRoles = route.data.expectedRoles;

    if (expectedRoles == null) {
      return true;
    }

    if (userCreds != null) {

      if (userCreds.accessToken == null) {
        this.router.navigate(['/login']);
        return false;
      } else {
        const currentRole = userCreds.role;

        if (this.matchRoles(expectedRoles, currentRole)) {
          return true;
        } else {
          this.router.navigate(['/dashboard']);
          return false;
        }

      }

    } else {
      this.router.navigate(['/login']);
      return false;
    }


  }

  matchRoles(expectedRole, currentRole): boolean {

    const expectedRoleList = expectedRole.split(',');
    let authRole = false;

    for (let i = 0; i < expectedRoleList.length; i++) {
      if (expectedRoleList[i] === currentRole) {
        authRole = true;
        break;
      }
    }

    return authRole;
  }

}
