import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';


import {MyServiceService} from './my-service.service';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { DWApplicationsComponent } from './dwapplications/dwapplications.component';


@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    DWApplicationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [MyServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
