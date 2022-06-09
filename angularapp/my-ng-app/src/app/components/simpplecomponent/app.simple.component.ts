import {Component} from '@angular/core';


@Component({
  selector:'app-simple-component',
  templateUrl:'./app.simple.view.html'
})
export class SimpleComponent {
  name: string;
  message: string;
  url:string;
  characters:Array<string>;
  selectedCharacter:string;
  items:Array<any>;
  selectedItem:any;
  isShow:boolean;

  constructor(){
    this.name = '';
    this.message = 'The First Component Developed By Me.';
    this.url = 'https://www.webnethelper.com';
    this.characters = new Array<string>();
    this.characters.push('James Bond');
    this.characters.push('Jason Bourn');
    this.characters.push('Indiana Jones');
    this.characters.push('Jack Reacher');
    this.characters.push('Ethan Hunt');
    this.selectedCharacter = '';
    this.items = new Array<any>();
    this.items.push({id:1,name:'Laptop'});
    this.items.push({id:2,name:'Desktop'});
    this.items.push({id:3,name:'RAM'});
    this.items.push({id:4,name:'Router'});
    this.selectedItem = {id:0, name:''};
    this.isShow = true;
  }
   display():void {
     alert('Method is called');
     // Update the Public Property
     this.message = 'Update after click';
   }
   toggle():void {
     this.isShow = !this.isShow;
    // if(this.isShow) this.isShow = false;
    // else this.isShow = true;
   }
}
