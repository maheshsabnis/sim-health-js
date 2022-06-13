import { Component, OnInit } from '@angular/core';
import { TitleStrategy } from '@angular/router';
import { Dept, Depts, Emp, Emps } from './../../models/app.addignment.model';

@Component({
  selector: 'app-assignment-component',
  templateUrl: './app.assignment.view.html',
})
export class AssignmentComponent implements OnInit {
  dept: Dept;
  emp: Emp;
  depts = Depts;
  emps = Emps;
  private _filteredEmps: Array<Emp>;
  selDname: string;
  selLocation: string;
  constructor() {
    this.dept = new Dept(0, '', '');
    this.emp = new Emp(0, '', 0);
    this._filteredEmps = new Array<Emp>();
    this._filteredEmps = this.emps;
    this.selDname = '';
    this.selLocation = '';
  }

  ngOnInit() {}

  get FilteredEmps(): Array<Emp> {
    this._filteredEmps = new Array<Emp>();



    if (this.selDname) {
      // get DeptNo from selected Dname
      let filteredDept = this.depts.filter((d, i) => {
        return d.DeptName === this.selDname;
      });
      for (let j = 0; j < filteredDept.length; j++) {
        for (let i = 0; i < this.emps.length; i++) {
          if (filteredDept[j].DeptNo === this.emps[i].DeptNo) {
            this._filteredEmps.push(this.emps[i]);
          }
        }
      }
      // reset the selDname
     // this.selDname = '';
    } else {
      this._filteredEmps = this.emps;
    }
    if (this.selLocation) {
      // Read all departments for selected Location
      // FInd the Matach for Selected DeptNo from Emps
       // get DeptNo from selected Dname
       let filteredDept1 = this.depts.filter((d, i) => {
        return d.Location === this.selLocation;
      });
      for (let j = 0; j < filteredDept1.length; j++) {
        for (let i = 0; i < this.emps.length; i++) {
          if (filteredDept1[j].DeptNo === this.emps[i].DeptNo) {
            this._filteredEmps.push(this.emps[i]);
          }
        }
      }
     // this.selLocation = '';
    } else {
      this._filteredEmps = this.emps;
    }
    return this._filteredEmps;
  }
}
