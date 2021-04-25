import {Employee} from '../models/employee.model';
import {Observable, of} from 'rxjs';
import {delay} from 'rxjs/operators';

// @Injectable()
export class EmployeeService {
  employeeList: Employee[] = [
    {
      id: 1,
      name: 'Mark',
      gender: 'Male',
      contactPreference: 'Email',
      email: 'mark@pragimtech.com',
      dateOfBirth: new Date('10/25/1988'),
      phoneNumber: '2345978640',
      department: '3',
      isActive: true,
      photoPath: 'assets/images/mark.png'
    },
    {
      id: 2,
      name: 'Mary',
      gender: 'Female',
      contactPreference: 'Phone',
      phoneNumber: '2345978640',
      dateOfBirth: new Date('11/20/1979'),
      department: '2',
      isActive: true,
      photoPath: 'assets/images/mary.png'
    },
    {
      id: 3,
      name: 'John',
      gender: 'Male',
      contactPreference: 'Phone',
      phoneNumber: '5432978640',
      dateOfBirth: new Date('3/25/1976'),
      department: '2',
      isActive: false,
      photoPath: 'assets/images/john.png'
    }];

  getEmployees(): Observable<Employee[]> {
    return of(this.employeeList).pipe(delay(2000));
  }

  getEmployee(id: Number): Employee {
    return this.employeeList.find(e => e.id === id);
  }

  save(employee: Employee): void {
    if (employee.id === null) {
      const maxId = this.employeeList.length;
      employee.id = maxId + 1;
      this.employeeList.push(employee);
    } else {
      const employeeIndex = this.employeeList.findIndex(emp => employee.id === emp.id);
      this.employeeList[employeeIndex] = employee;
    }
  }
}
