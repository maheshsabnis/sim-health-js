import { Component, OnInit } from '@angular/core';
import { RegisterUser,ResponseData, LoginUser } from 'src/app/models/app.secuity.models';
import {Department} from '../../models/app.dept.model';
import {DepartmentHttpSecureService} from './../../services/app.httpsecure.service';

@Component({
  selector: 'app-departmentsecurity-component',
  templateUrl: './app.departmentsecurity.view.html'
})

export class DepartmentSecurityComponent implements OnInit {
  dept:Department;
  depts:Array<Department>;
  message:string;
  responseData:ResponseData;
  // Lets Inject the service
  constructor(private serv:DepartmentHttpSecureService) {
    this.dept = new Department(0,'',0,'');
    this.depts = new Array<Department>();
    this.message = '';
    this.responseData = new ResponseData('');
  }


  register():void {
    let newUser:RegisterUser = new RegisterUser("mahesh2@msit.com", "P@ssw0rd_", "P@ssw0rd_");
    this.serv.registerNewUser(newUser).subscribe({
      next:(response)=>{

        this.message = response.Message;
      },
      error:(err)=>{
        this.message = `Error Occured ${err}`;
      }
    });
  }

  login():void {
    let authUser:LoginUser = new LoginUser("mahesh2@msit.com", "P@ssw0rd_");
    this.serv.loginUser(authUser).subscribe({
      next:(response)=>{
        this.message = response.Message;
        // Save the Token into the 'sessionStorage' of the Browser
        sessionStorage.setItem('token', this.message);
      },
      error:(err)=>{
        this.message = `Error Occured ${err}`;
      }
    });
  }


  // Make the first call to REST API in the ngOnInit() method
  ngOnInit() {
    //this.loadData();
  }

  // Let the Component Subscribe to Service and hence with Observable
  // to read the data received by the Observable
   loadData():void {
    // Read Token from sessionStorage
    let token:string = sessionStorage.getItem('token');
    // use the subscribe() method to subscribe to Observable
    // Use 'next' object of SUbscribe for Success
    // Use 'error' object of the Subscribe for Error
    this.serv.getDepartments(token).subscribe({
      next:(resp)=>{ // Success
        this.depts = resp; // Read received departments
        this.message = 'Data is received Successfully';
      },
      error:(err)=>{ // Fail
        this.message = `Error Occurred ${err}`;
      }
    });
  }
  logout():void {
    // clear the sessionstorage
    sessionStorage.clear();
  }
  clear():void {
    this.dept = new Department(0,'',0,'');
  }
  save():void {
    let token:string = sessionStorage.getItem('token');
     this.serv.postDepartment(this.dept,token).subscribe({
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
