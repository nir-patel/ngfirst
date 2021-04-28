import { Component, OnInit } from '@angular/core';

import {MyServiceService} from './my-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Data Warehouse Applications';


  compProp = 'This is App comp property';
  constructor(private mysvc: MyServiceService) {}
  ngOnInit() {
    this.compProp = this.mysvc.serviceProp;
  }
}
