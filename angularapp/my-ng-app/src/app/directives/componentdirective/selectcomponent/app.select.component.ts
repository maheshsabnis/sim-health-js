import { Component, OnInit, Input,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-select-component',
  templateUrl: './app.select.view.html'
})

export class SelectComponent implements OnInit {
  private _DataSource:Array<any>;
  private _BindProperty:any;
  @Output()
  selectItem:EventEmitter<any>;
  constructor() {
    this._DataSource = new Array<any>();
    this.selectItem = new EventEmitter<any>();
  }

  ngOnInit() { }

  // define get/set property with @Input() DEcorator
  // Input Decorated property will be used for 'PROPERTY-BINDING'
  // <app-select-component [DataSource]="DATA-FROM-PARENT-COMPONENT"></app-select-component>
  @Input()
  set DataSource(val:Array<any>){
    this._DataSource = val;
  }
  get DataSource():Array<any> {
    return this._DataSource;
  }
  @Input()
  set BindProperty(val:any){
    this._BindProperty = val;
  }
  get BindProperty():any {
    return this._BindProperty;
  }
  // Lets define a method that will emit an event
  // Bind this method to UI element
  emitData(val:any):void {
    // The selectItem Event will be subscribed by the Parent Component
    // using an Event Binding
    // <app-select-component (selectItem)="METHOD-FROm-PARENT-COMPONENT($event)"></app-select-component>
    this.selectItem.emit(val);
  }
}
