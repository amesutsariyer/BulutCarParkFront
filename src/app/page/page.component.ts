import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {

  constructor(public activatedroute: ActivatedRoute) {
  }

  activeChild: string;

  ngOnInit() {
    this.activatedroute.data.subscribe(data => {
      this.activeChild = data.child;
    });
  }

}
