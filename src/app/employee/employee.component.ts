import { Component, OnInit } from '@angular/core';

import {MyServiceService} from './../my-service.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  compProp = 'This is Employee comp property';
  constructor(private mysvc: MyServiceService) {}
  ngOnInit() {
    this.compProp = this.mysvc.serviceProp;
  }

}
