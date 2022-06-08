import { Component } from '@angular/core';

// WHen the APpCOmponent instance is created
// the @Component() decorator is also Instantiated
@Component({
  selector: 'app-root', // the component will be used in index.html or in HTML of other component using selector
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-ng-app';
}
