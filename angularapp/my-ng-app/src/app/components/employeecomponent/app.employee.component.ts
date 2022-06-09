import { Component, OnInit} from '@angular/core';
import {Employee} from './../../models/app.employee.model';
import {Departments, Designations} from './../../models/app.constants';
import {EmployeeLogic} from './../../models/app.logic';
@Component({
  selector:'app-employee-component',
  templateUrl:'./app.employee.view.html'
})
export class EmployeeComponent implements OnInit{

  employee: Employee;
  employees:Array<Employee>;
  private logic: EmployeeLogic;

  tableColumns:Array<string>;

  // Assign the COnstants to local public properties of the component
  departments = Departments;
  designations = Designations;
  constructor(){
    console.log('COnstructor is called');
    this.employee = new Employee(0,'','','',0);
    this.employees = new Array<Employee>();
    this.logic = new EmployeeLogic();
    this.tableColumns = new Array<string>();

  }
  // invoked after the constructor completes its execution
  ngOnInit():void {
    console.log('ngOnInit is called');
    // call the getEmployees()
    this.employees = this.logic.getEmployees();
    // Read all properties of Employee class into the tableColumns
    // so that it can be used for generating table column headers
    // Dynamically
    this.tableColumns = Object.keys(this.employee);
  }
  clear():void {
    this.employee = new Employee(0,'','','',0);
  }
  save():void {
    this.employees = this.logic.addEmployee(this.employee);
  }
  getSelectedEmployee(emp:Employee):void {
   // this.employee = emp;
   this.employee = Object.assign({},emp); // clone of emp and it is assigned to employee
  }
  getDeptName(event:any):void {
    console.log(`DeptNAme ${event}`);

    this.employee.DeptName = event;
  }
  getDesignation(event:any):void {
    console.log(`Designation ${event}`);
    this.employee.Designation = event;
  }

}
