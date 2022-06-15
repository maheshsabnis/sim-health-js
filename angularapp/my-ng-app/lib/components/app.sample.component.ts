import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sample-component',
  template: `
     <div class="container">
        <h5>The Lazily Loaded Component</h5>
        <strong>{{message}}</strong>
     </div>
  `
})

export class SampleComponent implements OnInit {
  message:string;
  constructor() {
    this.message = "This component will be lazily Loaded";
   }

  ngOnInit() { }
}
