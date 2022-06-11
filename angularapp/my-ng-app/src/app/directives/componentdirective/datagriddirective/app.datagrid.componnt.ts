import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-datagrid-component',
  templateUrl: './app.datagrid.view.html'
})

export class DataGridComponent implements OnInit {
  private _DataSource:Array<any>;
  columnHeaders:Array<string>;
  private _CanDelete:boolean;
  private _Color:string;
  @Output()
  selectRow:EventEmitter<any>;
  constructor() {
    this._DataSource = new Array<any>();
    this.columnHeaders = new Array<string>();
    this._CanDelete = false;
    this.selectRow = new EventEmitter<any>();
    this._Color = '';
   }

  ngOnInit() { }

  @Input()
  set DataSource(val:Array<any>) {
    if(val !== undefined){
      this._DataSource = val;
      // Read 0th record from _DataSource and read properties
      // of 0th record, that will be COlumn-headers for table
      this.columnHeaders = Object.keys(this._DataSource[0]);
    } else {
      this._DataSource = new Array<any>();
    }
  }
  get DataSource(): Array<any> {
    return this._DataSource;
  }
  @Input()
  set CanDelete(val:boolean){
    this._CanDelete = true;
  }
  get CanDelete():boolean {
    return this._CanDelete;
  }

  @Input()
  set Color(val:string){
    this._Color = val;
  }
  get Color():string {
    return this._Color;
  }

  onSelectRow(rec:any):void {
    this.selectRow.emit(rec);
  }
}
