import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { EmployeeReactiveFormComponent } from './components/employeereactiveformcomponent/app.employeereactiveform.component';
import { DeptCreteComponent } from './components/routingapp/app.deptcreate.component';
import { DeptEditComponent } from './components/routingapp/app.deptedit.component';
import { DeptListComponent } from './components/routingapp/app.deptlist.component';

// define the route table
const routes: Routes = [
  {path:'', component: DeptListComponent}, // Default Component
  {path:'create', component:DeptCreteComponent, children:[
    {path:'empreact', component:EmployeeReactiveFormComponent} // CHild Routing
  ]},
  {path:'edit/:id', component:DeptEditComponent}, // Route Parameter
  {path:'lazy',  // Look for the './../../lib/app.lazy.module.ts' file
                  // if found then load it in browser
                  // and then return the Angular Module (NgModule) from it
    loadChildren:()=>import('./../../lib/app.lazy.module').then(m=>m.LazyModule)},
  {path:'**', redirectTo:'/'} // if no path is matched, then redirect to Default Component
];

@NgModule({
  // REgistering the Route table ar root level
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule] // The current Module (AppRoutingModule) export the ROuterModule and hence also export the route table
})
export class AppRoutingModule { }
