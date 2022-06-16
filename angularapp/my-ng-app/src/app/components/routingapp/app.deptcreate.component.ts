import { Component, OnInit } from '@angular/core';
import { Department } from 'src/app/models/app.dept.model';
import { DepartmentHttpService } from 'src/app/services/app.http.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-deptcreate-component',
  templateUrl: './app.deptcreate.view.html'
})
export class DeptCreteComponent implements OnInit {
  dept:Department;
  message:string;
  constructor(private serv:DepartmentHttpService, private router:Router) {
    this.dept = new Department(0,'',0,'');
    this.message = '';
   }

  ngOnInit(): void { }
  clear():void {
    this.dept = new Department(0,'',0,'');
  }
  save():void {
     this.serv.postDepartment(this.dept).subscribe({
      next:(resp)=>{
        // NAvigate to the DEfault ROute i.e. DeptListComponent
        this.router.navigate(['']);
        this.message = 'Data is added Successfully';
      },
      error:(err)=>{ // Fail
        this.message = `Error Occurred ${err}`;
      }

     });
  }


}
