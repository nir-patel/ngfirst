import { Component, OnInit } from '@angular/core';

import {MyServiceService} from './../my-service.service';

@Component({
  selector: 'app-dwapplications',
  templateUrl: './dwapplications.component.html',
  styleUrls: ['./dwapplications.component.scss']
})
export class DWApplicationsComponent implements OnInit {


  compProp = 'This is comp property';
public users = [];

  constructor(private mysvc: MyServiceService) {}
  ngOnInit() {
    this.mysvc.serviceProp = 'DWA Comp';
    this.compProp = this.mysvc.serviceProp;
  }

  GetUsers() {
    this.mysvc.getData().subscribe((data) => {
      this.users = Array.from(Object.keys(data), k => data[k]);
      console.log(this.users);
  });
}

}
