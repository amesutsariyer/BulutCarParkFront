import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComponentListenerService {

  private componentSubject: BehaviorSubject<any> = new BehaviorSubject<any>([]);
  public componentCall = this.componentSubject.asObservable();

  constructor() {
  }

  next(moduleName: any, componentName: any) {
    this.componentSubject.next(moduleName + '-' + componentName);
  }

  nextWithItemId(moduleName: any, componentName: any, itemId: any) {
    this.componentSubject.next(moduleName + '-' + componentName + '-' + itemId);
  }

}
