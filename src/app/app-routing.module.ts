import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ListEmployeesComponent} from './employees/list-employees.component';
import {CreateEmployeesComponent} from './employees/create-employees.component';
import {CreateEmployeeCanDeactivateGuardService} from './employees/create-employee-can-deactivate-guard.service';
import {EmployeeDetailsComponent} from './employees/employee-details.component';

const routes: Routes = [
  {path: 'list', component: ListEmployeesComponent},
  {path: 'create', component: CreateEmployeesComponent, canDeactivate: [CreateEmployeeCanDeactivateGuardService]},
  {path: 'employee/:id', component: EmployeeDetailsComponent},
  {path: '', redirectTo: '/list', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
