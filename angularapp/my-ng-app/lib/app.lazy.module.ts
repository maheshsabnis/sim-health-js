import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule,Routes} from '@angular/router';
import { SampleComponent } from './components/app.sample.component';

// Define Routing
let childRoutes:Routes = [
  {path:'',component:SampleComponent}
];


@NgModule({
                          // Registering the Route Table for Lazy LOading
  imports: [CommonModule, RouterModule.forChild(childRoutes)],
  declarations: [SampleComponent],

})
export class LazyModule { }
