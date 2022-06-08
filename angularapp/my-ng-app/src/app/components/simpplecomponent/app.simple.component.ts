import {Component} from '@angular/core';


@Component({
  selector:'app-simple-component',
  templateUrl:'./app.simple.view.html'
})
export class SimpleComponent {
  name: string;
  message: string;
  url:string;

  constructor(){
    this.name = '';
    this.message = 'The First Component Developed By Me.';
    this.url = 'https://www.webnethelper.com';
  }
   display():void {
     alert('Method is called');
     // Update the Public Property
     this.message = 'Update after click';
   }
}
