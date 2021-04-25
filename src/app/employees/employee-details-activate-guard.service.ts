import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Injectable} from '@angular/core';
import {EmployeeService} from './employee.service';

@Injectable()
export class EmployeeDetailsActivateGuardService implements CanActivate {
  constructor(private _employeeService: EmployeeService, private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (route.paramMap.has('id')) {
      const id = +route.paramMap.get('id');
      const employee = this._employeeService.getEmployee(id);
      if (!!employee) {
        return true;
      }
    }
    this.router.navigate(['notFound']);
    return false;
  }

}
