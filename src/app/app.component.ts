import {AfterViewInit, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {ComponentListenerService} from './services/component-listener.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'bulut-carpark';

  constructor(public componentListener: ComponentListenerService, private cdr: ChangeDetectorRef) {

  }

  isLoginPage = false;

  ngAfterViewInit(): void {
    this.cdr.detectChanges();
  }

  ngOnInit(): void {
    this.componentListener.componentCall.subscribe(value => {
      if (value.indexOf('login') >= 0) {
        this.isLoginPage = true;
      } else if (value.indexOf('dashboard') >= 0) {
        this.isLoginPage = false;
      }
    });
  }


}
