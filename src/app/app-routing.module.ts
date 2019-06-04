import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { DWApplicationsComponent } from './dwapplications/dwapplications.component';

const routes: Routes = [
  {
    path: 'employee',
    component: EmployeeComponent
},
{
  path: 'dwa',
  component: DWApplicationsComponent
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
