import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Employee} from '../models/employee.model';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-display-employee',
  templateUrl: './display-employee.component.html',
  styleUrls: ['./display-employee.component.css']
})
export class DisplayEmployeeComponent implements OnInit {
  @Input() employee: Employee;
  @Input() searchTerm: string;
  @Input() showList: boolean;

  @Output()
  notify: EventEmitter<Employee> = new EventEmitter<Employee>();
  private selectedEmployeeId: number;

  constructor(private _route: ActivatedRoute, private _router: Router) {
  }

  ngOnInit() {
    this.selectedEmployeeId = +this._route.snapshot.paramMap.get('id');
  }

  viewEmployee(): void {
    this._router.navigate(['employee', this.employee.id], {
      queryParams: {'searchTerm': this.searchTerm}
    });
  }

  editEmployee(): void {
    this._router.navigate(['edit', this.employee.id]);
  }

}
