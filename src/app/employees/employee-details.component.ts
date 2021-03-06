import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Employee} from '../models/employee.model';
import {EmployeeService} from './employee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  private employee: Employee;
  private employeeId: number;

  constructor(private _activatedRoute: ActivatedRoute, private _employeeService: EmployeeService,
              private _router: Router) {

  }

  ngOnInit() {
    // this.employeeId = +this._activatedRoute.snapshot.paramMap.get('id');
    this._activatedRoute.paramMap.subscribe(param => {
      this.employeeId = +param.get('id');
      this.employee = this._employeeService.getEmployee(this.employeeId);
    });
  }

  showNext() {
    if (this.employeeId >= 3) {
      this.employeeId = 1;
    } else {
      this.employeeId += 1;
    }
    this._router.navigate(['employee', this.employeeId]);
  }
}
