import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ListEmployeesComponent} from './employees/list-employees.component';
import {CreateEmployeesComponent} from './employees/create-employees.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BsDatepickerModule} from 'ngx-bootstrap/datepicker';
import {SelectFieldRequiredValidatorDirective} from './shared/requiredFieldValidator.directive';
import {EqualCompareValidatorDirective} from './shared/equalCompareValidator.directive';
import {EmployeeService} from './employees/employee.service';
import {DisplayEmployeeComponent} from './employees/display-employee.component';
import {CreateEmployeeCanDeactivateGuardService} from './employees/create-employee-can-deactivate-guard.service';
import {EmployeeDetailsComponent} from './employees/employee-details.component';
import {EmployeeDetailsActivateGuardService} from './employees/employee-details-activate-guard.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

// import {FilterEmployeeByNamePipe} from './employees/filter-employee-by-name.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ListEmployeesComponent,
    CreateEmployeesComponent,
    SelectFieldRequiredValidatorDirective,
    EqualCompareValidatorDirective,
    DisplayEmployeeComponent,
    EmployeeDetailsComponent,
    PageNotFoundComponent,
    // FilterEmployeeByNamePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BsDatepickerModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [EmployeeService, CreateEmployeeCanDeactivateGuardService, EmployeeDetailsActivateGuardService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
