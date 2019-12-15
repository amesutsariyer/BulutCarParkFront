import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComponentListenerService {

  private sidebarSubject: BehaviorSubject<any> = new BehaviorSubject<any>([]);
  public sidebarCall = this.sidebarSubject.asObservable();

  constructor() {
  }

  next(moduleName: any, componentName: any) {
    this.sidebarSubject.next(moduleName + '-' + componentName);
  }

  nextWithItemId(moduleName: any, componentName: any, itemId: any) {
    this.sidebarSubject.next(moduleName + '-' + componentName + '-' + itemId);
  }

}
