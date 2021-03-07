// import {Pipe, PipeTransform} from '@angular/core';
// import {Employee} from '../models/employee.model';
//
// @Pipe({
//   name: 'EmployeeFilter',
//   pure: false
// })
// export class FilterEmployeeByNamePipe implements PipeTransform {
//   transform(employees: Employee[], searchTerm: string): Employee[] {
//     if (searchTerm.trim() === '') {
//       return employees;
//     }
//     const filteredEmployees = employees.filter((employee) => {
//       return employee.name.toLowerCase().startsWith(searchTerm.toLowerCase());
//     });
//     return filteredEmployees;
//   }
// }
