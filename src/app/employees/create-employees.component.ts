import {Component, OnInit, ViewChild} from '@angular/core';
import {Department} from '../models/department.model';
import {BsDatepickerConfig} from 'ngx-bootstrap/datepicker';
import {Employee} from '../models/employee.model';
import {EmployeeService} from './employee.service';
import {ActivatedRoute, Router} from '@angular/router';
import {NgForm} from '@angular/forms';


@Component({
  selector: 'app-create-employees',
  templateUrl: './create-employees.component.html',
  styleUrls: ['./create-employees.component.css']
})
export class CreateEmployeesComponent implements OnInit {
  @ViewChild('employeeForm') public employeeForm: NgForm;
  datePickerConfig: Partial<BsDatepickerConfig>;
  employee: Employee;
  previewPhoto = false;
  panelString: string;
  departments: Department[] = [
    {id: 1, name: 'Help Desk'},
    {id: 2, name: 'HR'},
    {id: 3, name: 'IT'},
    {id: 4, name: 'Payroll'}
  ];

  constructor(private _employeeService: EmployeeService, private _router: Router, private _route: ActivatedRoute) {
    this.datePickerConfig = Object.assign({},
      {
        containerClass: 'theme-dark-blue',
        dateInputFormat: 'DD/MM/YYYY',
      });
  }

  ngOnInit() {
    this._route.paramMap.subscribe((paramMap) => {
      console.log('reached');
      const employeeId = +paramMap.get('id');
      if (employeeId === 0) {
        this.employee = {
          id: null,
          name: null,
          gender: null,
          email: null,
          phoneNumber: null,
          contactPreference: null,
          dateOfBirth: null,
          department: '-1',
          isActive: false,
          photoPath: null,
        };
        this.employeeForm.reset();
        this.panelString = 'Create Employee';
      } else {
        const employee = this._employeeService.getEmployee(employeeId);
        if (!employee) {
          this._router.navigate(['pageNotFound']);
        }
        this.employee = Object.assign({}, employee);
        this.panelString = 'Edit Employee';
      }
    });
  }


  saveEmployee(): void {
    const newEmployee: Employee = {...this.employee};
    this._employeeService.save(newEmployee);
    this.employeeForm.reset();
    this._router.navigate(['list']);
  }

  togglePreview() {
    this.previewPhoto = !this.previewPhoto;
  }

}
