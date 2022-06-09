import { Employee } from './app.employee.model';

export class EmployeeLogic {
  private employees: Array<Employee>;
  constructor() {
    this.employees = new Array<Employee>();
  }

  getEmployees(): Array<Employee> {
    return this.employees;
  }
  addEmployee(emp: Employee): Array<Employee> {
    this.employees.push(emp);
    return this.employees;
  }
}
