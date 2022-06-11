import { Component, OnInit } from '@angular/core';
import {Product,Products} from './../../../models/app.communication.models';
import {CommunicationService} from './../../../services/app.communication.service';
@Component({
  selector: 'app-productreceiver-component',
  templateUrl: './app.productreceiver.view.html'
})

export class ProductReceiverComponent implements OnInit {
  product:Product;
  products = Products;
  // Lets define an another Arra type for Filtration
  private _FilterProducts:Array<Product>;
  // Inject the CommunicationService Service
  constructor(private serve:CommunicationService) {
    this.product = new Product(0,'',0,0);
    this._FilterProducts = new Array<Product>();
  }
  // Lets subscribe to Event from Service Once
  ngOnInit() {
    this.serve.valueReceived.subscribe((params)=>{
      // params is the data emitted by the sender
       this.product.CategoryId = params;
       console.log(`Received data from Sender = ${params}`);
    });
  }

  // Define a read-only property that will updated every-time
  // when the new CategoryId is received

  get FilterProducts():Array<Product>{
    // console.log('====================================');
    // console.log('Property Called');
    // console.log('====================================');
    this._FilterProducts = new Array<Product>();
    if(this.product.CategoryId > 0) {
      console.log('If...');

      // filter products from products array based on CategoryId
      this._FilterProducts = this.products.filter((p,i)=>{
         return p.CategoryId === this.product.CategoryId;
      });

    } else {
      this._FilterProducts = this.products;
    }
    return this._FilterProducts;
  }
}
