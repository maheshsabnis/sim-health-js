import { Component, OnInit } from '@angular/core';
import { Department } from 'src/app/models/app.dept.model';
import { DepartmentHttpService } from 'src/app/services/app.http.service';
import {ActivatedRoute,Router} from '@angular/router';
@Component({
  selector: 'app-deptedit-component',
  templateUrl: './app.deptedit.view.html'
})
export class DeptEditComponent implements OnInit {
  dept:Department;
  message:string;
  constructor(private serv:DepartmentHttpService, private act:ActivatedRoute, private router:Router) {
    this.dept = new Department(0,'',0,'');
    this.message = '';
   }

  ngOnInit(): void {
    // subscribe to the Parameterized route using ActivatedRoute to read the parameter

    this.act.params.subscribe((params)=>{
        let id = params['id'];
        // call the service to receive record details for the Department to be updated
        this.serv.getDepartment(id).subscribe({
          next:(response)=>{
            this.dept = response
          },
          error:(err)=>{
            this.message = `Error Occurred ${JSON.stringify(err)}`;
          }
        });
    });

  }
  clear():void {
    this.dept = new Department(0,'',0,'');
  }
  save():void {
     this.serv.putDepartment(this.dept.DeptNo,this.dept).subscribe({
      next:(resp)=>{
        // navigate back to the Default
        this.router.navigate(['']);
        this.message = 'Data is added Successfully';
      },
      error:(err)=>{ // Fail
        this.message = `Error Occurred ${err}`;
      }

     });
  }


}
