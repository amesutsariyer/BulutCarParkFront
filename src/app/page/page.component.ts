import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ComponentListenerService} from '../services/component-listener.service';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {

  constructor(public activatedroute: ActivatedRoute, public componentListener: ComponentListenerService) {
    this.activatedroute.data.subscribe(data => {
      this.activeChild = data.child;
      if (this.activeChild == 'dashboard') {
        this.componentListener.next('dashboard', 'dashboard');
      }
    });
  }

  activeChild: string;


  ngOnInit() {
  }
}
