import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mainrouting-component',
  template: `
      <table class="table table-bordered table-striped table-danger">
          <tbody>
            <tr>
              <td>
                <!--Query to Route Table using [routerLink]-->
                <a [routerLink]="['']">List Departments</a>
              </td>
              <td>
                <a [routerLink]="['create']">Create Department</a>
              </td>
              <td>
                <a [routerLink]="['lazy']">Lazy</a>
              </td>
            </tr>

          </tbody>
      </table>
      <hr/>
      <!--Use router-outlet to load routed component-->
      <router-outlet></router-outlet>
  `
})

export class MainRoutingComponent implements OnInit {
  constructor() { }

  ngOnInit() { }
}
