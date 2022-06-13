import { Component, OnInit } from '@angular/core';
import {Department} from '../../models/app.dept.model';
import {DepartmentHttpService} from './../../services/app.http.service';
@Component({
  selector: 'app-department-component',
  templateUrl: './app.department.view.html'
})

export class DepartmentComponent implements OnInit {
  dept:Department;
  depts:Array<Department>;
  message:string;
  // Lets Inject the service
  constructor(private serv:DepartmentHttpService) {
    this.dept = new Department(0,'',0,'');
    this.depts = new Array<Department>();
    this.message = '';
  }

  // Make the first call to REST API in the ngOnInit() method
  ngOnInit() {
    this.loadData();
  }

  // Let the Component Subscribe to Service and hence with Observable
  // to read the data received by the Observable
  private loadData():void {
    // use the subscribe() method to subscribe to Observable
    // Use 'next' object of SUbscribe for Success
    // Use 'error' object of the Subscribe for Error
    this.serv.getDepartments().subscribe({
      next:(resp)=>{ // Success
        this.depts = resp; // Read received departments
        this.message = 'Data is received Successfully';
      },
      error:(err)=>{ // Fail
        this.message = `Error Occurred ${err}`;
      }
    });
  }

  clear():void {
    this.dept = new Department(0,'',0,'');
  }
  save():void {
     this.serv.postDepartment(this.dept).subscribe({
      next:(resp)=>{
        // If the data is posted successfully pust it in the depts array
        this.depts.push(resp);
        this.message = 'Data is added Successfully';
      },
      error:(err)=>{ // Fail
        this.message = `Error Occurred ${err}`;
      }

     });
  }
  delete():void {
    this.serv.deleteDepartment(this.dept.DeptNo).subscribe({
      next:(resp)=>{
        // If the data is posted successfully put it in the depts array
        this.loadData();
        this.message = 'Data is deleted Successfully';
      },
      error:(err)=>{ // Fail
        this.message = `Error Occurred ${err}`;
      }

     });
  }
  update():void {
    this.serv.putDepartment(this.dept.DeptNo, this.dept).subscribe({
      next:(resp)=>{
        // If the data is posted successfully put it in the depts array
        this.loadData();
        this.message = 'Data is updated Successfully';
      },
      error:(err)=>{ // Fail
        this.message = `Error Occurred ${err}`;
      }

     });
  }
  getDeptDetails(id:number):void {
    this.serv.getDepartment(id).subscribe({
      next:(response)=>{
        this.dept = response;
      },
      error:(err)=>{ // Fail
        this.message = `Error Occurred ${err}`;
      }
    });
  }
}
