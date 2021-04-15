import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { tap } from 'rxjs/operators'
@Component({
  selector: 'app-outage-screen',
  templateUrl: './outage-screen.component.html',
  styleUrls: ['./outage-screen.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class OutageScreenComponent implements OnInit {



  constructor() { }

  ngOnInit(): void {
  }

  alertTheUser(){
    alert("Hey!")
  }

}
