import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Department } from 'src/app/models/app.dept.model';
import { DepartmentHttpService } from 'src/app/services/app.http.service';

@Component({
  selector: 'app-deptlist-component',
  templateUrl: './app.deptlist.view.html'
})

export class DeptListComponent implements OnInit {
  depts:Array<Department>
  message:string;
  constructor(private serv:DepartmentHttpService, private router:Router) {
    this.depts = new Array<Department>();
    this.message ="";
  }

  ngOnInit() {
    this.loadData();
  }

  private loadData():void {
    this.serv.getDepartments().subscribe({
      next:(resp)=>{
        this.depts = resp;
        this.message = 'Data is received Successfully';
      },
      error:(err)=>{ // Fail
        this.message = `Error Occurred ${err}`;
      }
    });
  }

  navigateToEdit(event:any):void {
    console.log(JSON.stringify(event));

    this.router.navigate(['edit', event.DeptNo]);

  }
}
