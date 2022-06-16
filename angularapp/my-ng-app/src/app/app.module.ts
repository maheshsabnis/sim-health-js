import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {SimpleComponent} from './components/simpplecomponent/app.simple.component';
import {EmployeeComponent} from './components/employeecomponent/app.employee.component';
import { SelectComponent } from './directives/componentdirective/selectcomponent/app.select.component';
import {DataGridComponent} from './directives/componentdirective/datagriddirective/app.datagrid.componnt';
import {EmployeeReactiveFormComponent} from './components/employeereactiveformcomponent/app.employeereactiveform.component';
import {ColorDirective} from './directives/attibutedirectives/app.color.diretive';
import {CategorySenderComponent} from './components/communication/categorysendercomponent/app.categorysender.component';
import { ProductReceiverComponent } from './components/communication/productreceivercomponent/app.productreceiver.component';
import { AssignmentComponent } from './components/assignment/app.assignment.component';
import {DepartmentComponent} from './components/departmentcomponent/app.department.component';
import { DepartmentSecurityComponent } from './components/departmentsecuritycomponent/app.departmentsecurity.component';
import { DeptCreteComponent } from './components/routingapp/app.deptcreate.component';
import { DeptEditComponent } from './components/routingapp/app.deptedit.component';
import { DeptListComponent } from './components/routingapp/app.deptlist.component';
import { MainRoutingComponent } from './components/routingapp/app.mainrouting.component';
// NgModule Decorator, makes the AppModule class as Angular Module
@NgModule({
  // Used to instantiate the Developer DEfined Components and Directives
  declarations: [
    AppComponent, SimpleComponent, EmployeeComponent,DataGridComponent,
     SelectComponent, EmployeeReactiveFormComponent,
     ColorDirective,CategorySenderComponent,
      ProductReceiverComponent,
      AssignmentComponent, DepartmentComponent,
      DepartmentSecurityComponent,
      DeptCreteComponent, DeptEditComponent, DeptListComponent,
      MainRoutingComponent
  ],
  // Used to import standard Angular Modules and external developer defined Angular module
  imports: [
    BrowserModule, FormsModule,ReactiveFormsModule,
    // AppRoutingModule: is imported =, hence the RouterModule with route table
    // is also loaded on the root of the current Angular Application
    AppRoutingModule,HttpClientModule
  ],
  providers: [],
  // This component is loaded in Browser
  // by BrowserModule and will be rendered
  bootstrap: [EmployeeComponent]
})
export class AppModule { }
// since the AppModule is exported, it can be imported
