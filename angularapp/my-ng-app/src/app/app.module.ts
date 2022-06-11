import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

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
// NgModule Decorator, makes the AppModule class as Angular Module
@NgModule({
  // Used to instantiate the Developer DEfined Components and Directives
  declarations: [
    AppComponent, SimpleComponent, EmployeeComponent,DataGridComponent,
     SelectComponent, EmployeeReactiveFormComponent,
     ColorDirective,CategorySenderComponent, ProductReceiverComponent
  ],
  // Used to import standard Angular Modules and external developer defined Angular module
  imports: [
    BrowserModule, FormsModule,ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  // This component is loaded in Browser
  // by BrowserModule and will be rendered
  bootstrap: [CategorySenderComponent, ProductReceiverComponent]
})
export class AppModule { }
// since the AppModule is exported, it can be imported
