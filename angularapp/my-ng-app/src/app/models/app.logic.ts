import { Employee } from './app.employee.model';

export class EmployeeLogic {
  private employees: Array<Employee>;
  constructor() {
    this.employees = new Array<Employee>();
    this.employees.push(new Employee(101, 'Mahesh', "IT", 'Director',  100000));
    this.employees.push(new Employee(102, 'Ajay', "Sales", 'Manager', 50000));
    this.employees.push(new Employee(103, 'Biju', "IT", 'Manager', 50000));
  }

  getEmployees(): Array<Employee> {
    return this.employees;
  }
  addEmployee(emp: Employee): Array<Employee> {
    this.employees.push(emp);
    return this.employees;
  }
}
