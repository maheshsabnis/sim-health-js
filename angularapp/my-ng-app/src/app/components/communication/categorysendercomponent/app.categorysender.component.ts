import { Component, OnInit } from '@angular/core';
import {Category,Categories} from './../../../models/app.communication.models';
import {CommunicationService} from './../../../services/app.communication.service';
@Component({
  selector: 'app-categorysender-component',
  templateUrl: './app.categorysender.view.html'
})

export class CategorySenderComponent implements OnInit {
  category:Category;
  categories = Categories;
  // Inject the CommunicationService using constructor injection
  constructor(private serv: CommunicationService) {
    this.category = new Category(0,'');
  }

  ngOnInit() { }
  onRowClick(cat:Category):void {
    console.log(`Selected Category Id = ${cat.CategoryId}`);

    // send data to service
    this.serv.sendData(cat.CategoryId);
  }
}
