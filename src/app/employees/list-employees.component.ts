import {Component, OnInit} from '@angular/core';
import {Employee} from 'src/app/models/employee.model';
import {EmployeeService} from './employee.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {
  employees: Employee[];
  filterEmployees: Employee[];
  private _searchTerm: string;

  get searchTerm() {
    return this._searchTerm;
  }

  set searchTerm(value: string) {
    this._searchTerm = value;
    this.filterEmployees = this.getFilteredEmployees();
  }

  constructor(private _router: Router, private _route: ActivatedRoute) {
    this.employees = this._route.snapshot.data['employeeList'];
    this._route.queryParamMap.subscribe((queryMap) => {
      const searchTermParam: string = queryMap.get('searchTerm');
      if (searchTermParam) {
        this.searchTerm = searchTermParam;
      } else {
        this.filterEmployees = this.getFilteredEmployees();
      }
    });
  }

  getFilteredEmployees(): Employee[] {
    if (!(this._searchTerm)) {
      return this.employees;
    }
    return this.employees.filter((employee) => {
      return employee.name.toLowerCase().startsWith(this.searchTerm.toLowerCase());
    });
  }

  ngOnInit() {
  }

  onClick(empId: number): void {
    this._router.navigate(['employee', empId], {
      queryParams: {'searchTerm': this.searchTerm}
    });
  }

  changeFirstEmployee() {
    this.employees[0].name = 'Saurabh';
    this.filterEmployees = this.getFilteredEmployees();
  }
}
