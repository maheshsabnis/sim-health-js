import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {SimpleComponent} from './components/simpplecomponent/app.simple.component';
import {EmployeeComponent} from './components/employeecomponent/app.employee.component';
import { SelectComponent } from './directives/componentdirective/selectcomponent/app.select.component';
// NgModule Decorator, makes the AppModule class as Angular Module
@NgModule({
  // Used to instantiate the Developer DEfined Components and Directives
  declarations: [
    AppComponent, SimpleComponent, EmployeeComponent, SelectComponent
  ],
  // Used to import standard Angular Modules and external developer defined Angular module
  imports: [
    BrowserModule, FormsModule,
    AppRoutingModule
  ],
  providers: [],
  // This component is loaded in Browser
  // by BrowserModule and will be rendered
  bootstrap: [EmployeeComponent]
})
export class AppModule { }
// since the AppModule is exported, it can be imported
