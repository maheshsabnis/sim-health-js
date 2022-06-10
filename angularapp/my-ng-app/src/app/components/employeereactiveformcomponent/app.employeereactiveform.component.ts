import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {Employee} from './../../models/app.employee.model';
import { CustomValidator } from './app.custom.validator';
@Component({
  selector: 'app-employeereactiveform-component',
  templateUrl: './app.employeereactiveform.view.html'
})

export class EmployeeReactiveFormComponent implements OnInit {
  employee:Employee;
  frmEmp:FormGroup;
  employees: Array<Employee>;
  constructor() {
    this.employee = new Employee(0,'','','',0);
    this.employees = new Array<Employee>();
    // Instantiate the frmEmp by linking it with public properties of Employee class
    // using FormControl
    // Link public properties of EMployee class with FormControl
    // MAke sure that the FormControl instances (key) matches with
    // the pubic property name
    this.frmEmp = new FormGroup({
        EmpNo:new FormControl(this.employee.EmpNo,
           Validators.compose([
            Validators.required,
            Validators.minLength(2),
            Validators.maxLength(8),
            Validators.pattern('[0-9]+'), // numeric value
            CustomValidator.checkEven
            ])),
        EmpName:new FormControl(this.employee.EmpName),
        DeptName:new FormControl(this.employee.DeptName),
        Designation:new FormControl(this.employee.Designation),
        Salary:new FormControl(this.employee.Salary),
    });

  }

  ngOnInit() { }
  clear():void {
    this.employee = new Employee(0,'','','',0);
    // reset the frmEmp and hence the form
    this.frmEmp.setValue(this.employee);
  }
  save():void {
    // read data entered into UI and save it in Array
    this.employee = this.frmEmp.value;
    console.log(JSON.stringify(this.frmEmp.value));
   // this.employees.push(this.employee);
    console.log(JSON.stringify(this.employees));

  }
}
