import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ListEmployeesComponent} from './employees/list-employees.component';
import {CreateEmployeesComponent} from './employees/create-employees.component';
import {CreateEmployeeCanDeactivateGuardService} from './employees/create-employee-can-deactivate-guard.service';
import {EmployeeDetailsComponent} from './employees/employee-details.component';
import {EmployeeListResolverService} from './employees/employee-list-resolver.service';
import {EmployeeDetailsActivateGuardService} from './employees/employee-details-activate-guard.service';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path: 'list', component: ListEmployeesComponent, resolve: {employeeList: EmployeeListResolverService}},
  {path: 'create', component: CreateEmployeesComponent, canDeactivate: [CreateEmployeeCanDeactivateGuardService]},
  {path: 'employee/:id', component: EmployeeDetailsComponent, canActivate: [EmployeeDetailsActivateGuardService]},
  {path: '', redirectTo: '/list', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent, pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
