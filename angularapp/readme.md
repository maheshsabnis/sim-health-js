# Programming with Angular
1. Create an Angular Project
    - INstall the Angular CLI
        - A Template for creating Angular Application
        - npm install -g @angular/cli
            - Provide  'ng.bat' file to create Angular Project
    - CReate a new Angular Workspace using the Following COmmand
        - ng new [PROJECT-NAME]
            - eg. ng new my-ng-app
2. Angular Eco-System
    - List of Packages used for Angular Development
    - @angular/platform-browser-dynamic
        - Used to load the Angular Object Model in Browser
        - The 'platformBrowserDynamic()' object with the 'bootstrapModule()' method
            - Loads the ANgular Module(?) in browser
        - ANgular Module: Is a collection of standard Angular Modules , external modules, and all angular objects like Components, Directives, Services, etc. e.g. Namespace in .NET     
    - @angular/platform-browser
        - Loading the UI of ANgular App in Browser using the 'BrowserModule'
            - BrowserModule: The Standard Module, this is only used 'once' in angular app. This is used to Load and Render (Dynamic HTML UI Generation) the UI of the Angular Component
    - @angular/compiler
        - USed to provide the Compilation for Optimization to Angular Application  
            - COmpiles HTML UI into the JS Objects and Compress it   (The 'Ivy' Concept)
    - @angular/common
        - Provide the 'CommonMoule' object
            - IF a Angular project uses different Angular modules created by separate teams, then each module will use the CommonModule so that this module will deliver the respective HTML of each module and wil deliver it to the single BrowserModule for rendering         
        - @angular/common/http
            - Provides a HttpClientModule for making an external HTTP calls to REST APIs
    - @angular/forms
        - USed for HTML FOrms
            - FormsModule, used for Data Binding (Show + Update Data), using 'ngModel'
            - ReactiveFormsMoule
                - Used for Pure MVC using ANgular
                - Provides Data Validations on Model class instead of UI
    - @angular/router   
        - USed for Building SIngle Page Application using Angular
        - Provides 'RouterModule' for implementing Routing (navigation across UIs
        )
    - @angluar/core
        - Provides all Core Objects used for Building Angular Application
# Decorator
    - Provided in ES 6 but practically possible only using TypeScript and for Angular
    - Enhance the behavior of the object with additional properties
        - They can be applied on Class, Method, Data Member, Property.
        - @DecoratorName() class MyClass{}  
            - First Decorator will be executed then class will be instantiated      
# Angular Core Objects
- Angular Module
    - Main COntainer for Angular Application
        - Contains
            - Standard Angular Modules
            - Components Created for the Application
            - Directive Created for the Application and Standard Directives
            - Services Created for the Application
            - Pipes Created for the Application and standard Pipes
    - Angular Module is Created Using Decorator   
        - @NgModule from @angular/core
            - Applied on typescript class to use it as Angular Module   
                - @NgModule() class MyModule{....}
            - Following Properties of NgModule
                - imports: type of array, used to import all standard and external Angular Modules for the current application    
                    - Note: If the Current NgModule is top-level module, then the imports array MUST use 'BrowserModule' in it. If the Current NgModule is Library module, then it MUST import 'CommonModule'
                - exports: type of array, used to export contents of the current application e.g. Modules, COmponents, Services, Directves, etc. to external ANgular Application
                - declarations: type of array, used to define all developer created components and directives of the current application, so that ther instances are ready to use
                - providers: type of array, used to provide the 'Dependency COntainer' for the current Application so that all 'Angular Services' will be registered in the DI Container     
                - schemas: type of array, used to inform the Current Angular app that it can use external WebComponents  
                - bootstrap: type of array, used to load components on HTML Page for rendering, provided these components are defined in 'declarations' array. These will be rendered using BrowserModule   
                - elements: used to refere Angular COmponent as 'Custom HTML Element' (Deprecated from Angular 10+)
- Directive
    - Represened using @Directive() decorator from @angular/core
    - APplied on class
    - Contains Re-Usabe Logic that will be executed on UI (on Browser)
    - Component Directive, each component is reusable custom HTML element
    - Attribute Directive
        - An attribute that will be used by the Components for any custom behavior
        - e.g. ngModel, a standard Angular Attribute from @angular/forms, used for Data-Binding (Show+Update data) 
    - STructural Diretive
        - USed to dynamically generate (Add/Remove) HTML  
            - *ngFor, execute for..of loop n array to generate HTML element
            - *ngIf, evaluates an 'if..condition' to add/remove HTML element
    - Proeprty of Directive class
        - The 'selector'
            - USed to set the attribute property Name to HTML element so that it can be used to select the HTML element for Read/Write Data          
- Component
    - Applied on CLass using @Component() decorator from @angular/core
    - This is Fundamental UI of Angular Application
    - End-USer will be presented with UI and Functionality using Component
    - "An Autonomous Object that has UI (HTML), Data and Behavior (EVents)"
    - This can be re-used, so they are known as COmponent Directives
    - Proprties
        - The 'selector'
            - This is used on HTML page or UI of other component to load and render it
        - The 'templateurl'
            - Accepts an HTML file that contains UI for the Component
        - The 'template'
            - If not using separate HTML file for UI, then the HTML UI is directly assigned to this property (Please avoid it)         
        - The 'styles' / styleUrls
            - Internal CSS or external CSS file
    - @Component({
        selector: 'app-my-component',
        templateUrl : './app.mycomponent.html'

    }) class MyComponent{.....}         
    - Tis component will be used in HTML as follows
```` html    
        - <app-my-component></app-my-component>   
````        
- Service
    - USed @Injectable() decorator applied on class from @angular/core
    - used to contain 'Heavy-load-logic'
        - e.g. HTTP calls to external REST API, complex Async operations, heavy-data processing on client side
        - @Injectable()class MyService{...}
        - The MyService class needs to be registers in 'providers:[]' array of @NgModule
        - @Injectable({
            providedIn:'root'
        })
        - THis will provide Default DI Registration
- Pipe
    - Simple String Transformation on HTML
    - {{ROPERTY|PIPE-NAME}}
    - e.g.
        {{Name|upper}}
            - 'NAme' if the Property of COmponent class and 'upper' is pipe
            - It will convert value of Name into uppercase
    - Built-In-ipes
        - upper, lower, date, currency, json
    - USe @Pipe() decorator from @angular/core on class to create custom pipe              
- Dependency Injection  
    - A COntainer to register all Services                         

# ANgular Project STructure

1. package.json
    - List of packages used for Development, Testing as well as Runtime
    - section
        - devDependencies
            - COntains LIst of all packages required during development and testing
        - dependencies
            - Contains List of packages used for Execution (used for development too)   
            - External Dependencies     
                - tslib
                    - TypeSripct language Quality check and optimization during build
                    - Also uses Polyfills to make sure that the Generated JavaScript from TypeScript is executed in brower
                - zone.js
                    - USed by polyfilles to handle and Log browser errors
                - rxjs
                    - Reactive JavaScript Extensions
                    - USed when ANgular App makes external HTTP calls to REST API
                    - This library provides object to maintain Received Response fro REST API
        - scripts
            - define commands to build/test/run the application
```` javascript
 "scripts": {
    "ng": "ng",
    "start": "ng serve",
    "build": "ng build",
    "watch": "ng build --watch --configuration development",
    "test": "ng test"
  },
````

    - ng serve will be 'npm run start'
        - The 'npm' will look for package.json on the path where the command is invoked 
        - The 'npm run' will check the 'scripts' block in package.json
        - The 'npm run start' will check whether the 'start' key is present in 'script' block, if present then invoke and execute 'value of start' as a command
            - in our case 'npm run start' will invoke 'ng serve' and execute it 

2. tsconfig.json
    - tsconfig.ap.json
    - tsconfig.spec.json
3. angular.json
    - Application Configuration File for the Project 
4. src folder
5. node_modules folder
    - This folder will be created with 'npm install --save' commands, and this will contains folder having dependency files in it

Initial Chunk Files   | Names         |  Raw Size
vendor.js             | vendor        |   2.02 MB | --> The Standard Angular Package Transpilation
polyfills.js          | polyfills     | 313.40 kB | --> Browser Compatibility and Error Handling
styles.css, styles.js | styles        | 207.32 kB | --> CSS into JS Objects 
main.js               | main          |  50.45 kB | --> Application Code By developer
runtime.js            | runtime       |   6.52 kB | -->Foundation WebPack file that will load the angular app in browser

                      | Initial Total |   2.58 MB    
- To USe a class, method, interface from a angular pakage in .ts file import them using 'import' keyword
    - import {EXPORTED-CLASS|METHOD|INTERFACE | CONSTANT} from 'PACKAGE-NAME';                      

# Programming With Angular
- Create Component
    - Class Applied with @Component() decorator
    - Autonomous CLass with
        - UI
        - Data
        - Behavior 
- Work with Data Binding
    - Property Binding
        - Public Member of the COmponent class is Bind with HTML Element
            - Expression Binding aka Template Binding
                - Bind Public Property of component with Readonly HTL Elements using {{}} expression 
                    - Syntax
                        - {{PROPERTY-NAME}}
                        - This is readonly binding, UI cannot change the value, changes made in component will be updated to UI
                        - If PROPERTY-NAME is numeric expression then Angular will invoke eval() function internally and evaluate the math expression.
        - Used to bind the public property to the Editable attributes of HTML elements
            - input type="text" value
                - The 'value' is editable property
```` html
    <input type="text" [value]="PUBLIC-PROPERTY">
    e.g.
    <input type="text" [value]="Message">
````
    - The editable attribute is used in Square Bracket 
        - The 'Message' will be the PUBLIC property from Component class
        - Property Binding will not be able to update value from UI, but updated value from Component for the property will be updated in UI 
        - [value], [href], [disabled], [readonly], [checked], [hidden], ete.
    - Event Binding
        - The Event will be raised on HTML elements and the pubic method of the component class will be invoked and executed
        - Syntax
            - (EVENT-NAME)="PUBLIC-METHOD()"
```` html
    <input type="button" (click)="method1()">
````
    - The 'method1()' is pubic method of the component class
        - EVent Binding is  from UI to Component
        - If the method which is executed because of event binding is updating any public property of the component and if this property in bound with UI Element then that UI elements will be updated with new value of property    
    - Two-Way Binding
        - COmbination of Property BInding + Event Binding
        - It is possible using 'ngModel', it is a directive provided in 'FormsModule' from @angular/forms    
            - [(ngModel)]="PUBLIC-PROPERTY-OF-COMPONENT"
            - THis directive is applied on editable HTML Elements e.g. input:text, input:checkbox, input:radio, select
```` html
  <input type="text" [(ngModel)]="name">
````             
    - The 'name' is public property of the component
    - To use 'ngModel', the Angular Module (AppMdule), MUST import 'FormsModule' from @angular/forms and import is in 'imports' array of the @NgModule  
    - Execution of ngModel
        - ngModel will listen to the default event of the HTML element on which it is applied
            - e.g. if ngModel is applied on input:text element, then the default event is 'change' same for select element
        - ngModel will invoke its 'ngModelChanged' event behind the scene and will  read the value entered / selected for the element   
            - e.g. for input:text its value entered in text element and for select element the value of the selected option
        - the  ngModelChanged will invoke 'ngOnChanges' event of the Component class and the latest value for the HTML element will be passed to the property that is bind to the HTML element using ngModel  
        - Component will accept the updated value for the property, then this property will be manipulated (based on logic)
        - The Updated value of the property will be send bak to UI and the UI (HTML Elements) will be updated with the latest value of the property  



- USing Directives
    - THey are objects used for 
        - Defining custom behavior to HTML Element, Attribute Directives
            - [(ngModel)], [formGroup], formControlName, [value], [href]
        - Making a Component as a Custom Element, Component Directive
        - Generating DOM Dynamically based on Data, Structural Directives
            - *ngFor
            - *ngIf
- Points to be taken into COnsideration while Creating Components in Angular
    - If Same HTML UI elements is repetating in HTML Template with different data, then consider creating a 'Re-Usable' component
    - Try to avoid hard-coding for dynamically generating UI Elements 
    - (Very Important)
        - If the Component is performing HEavy-Load or time-consuming operations (e.g. Call to External Services, processing large array, etc. ) then if these operations are to be performed while component loading, then instead of writing this code in Constructor, let the component class implement 'OnInit' interface from @angular/core and implements its 'ngOnInit()' method and write the Heavy-Logic in this method. 
            - The 'ngOnInit()' methdo will be auto-invoked 'once' after the constructor is executed            
- Communication Across Components
    - Required in Re-Usable Components
    - Plan for UI fo Re-usability
    - Plan for @Input() properties as well as @Output() EVetEmitter<T> 
- Working with Angular Reactive Forms
    - Template Forms
        - Form Tag and data is bind using [(ngModel)]
    - Reactive Forms
    - @angular/forms
        - ReactiveFormsModule
            - Platform to execute the Reactive-Forms in Angular
            - THis MUST be imported in 'imports' array of @NgModule
        - FormGroup
            - CLass that represents the form tag
            - [formGroup], a attribute directive applied on form tag
            - The 'value' property used to read the data entered in all editable elements of the form
            - The 'SetValues()' a method to assign value to Form tag    
        - FormControl
            - Each Editable ELement under the FormGroup    
            - This is mapped with the public property of the Model class
             - The 'value' property used to read the data entered in all editable elements of the form
            - The 'SetValues()' a method to assign value to Form tag   
        - AbstractControl, an abstract base class for FormGroup and FormControl
        - Validators
            - class contains static methods for validations
                - require(AbstractControl), requireTrue(AbstractControl)
                - pattern(string|RegEx)
                - minLength(number) , maxLength(number)
                - email(AbstractControl)
                - requiredNull(AbstractControl)     
                - compose([ARRAY-OF-VALIDATOR-METHODS]) , composeAsync([ARRAY-OF-VALIDATOR-METHODS])    
                - If a method accepts 'AbstractControl' as input parameter, then the explicit parameter need not to pass to this method, instead the value will be read based on the control on which this validation method is applied 
        - Defining Validations
            - They are applied on Model class using Validators and FormControl classes
        - Applying Validations on UI
            - [formGroup].controls[formControlName].errors[VALIDATION-RULE]
                - [formGroup]: An instance of FormGroup class that is bind with form tag using [formGroup] attribute directive
                - [formControlName]: The Key, that map the FormControl class instance with the public property of the Model class and the UI element with which the public property is bind.   
                    - UI -->FormControlName-->FormControl Instance --> Public Property of Model class
                -[VALIDATION-RULE]: The type of validation applied on public property of the Model class using Validators class 
            - Execution aka Evaluation of validations
                - Check if the UI element is changed (aka dirtyfied)   
                    - [formGroup].controls[formControlName].dirty
                - Check if the value is valid / invalid
                    - [formGroup].controls[formControlName].valid
                    - [formGroup].controls[formControlName].invalid     
                    - ![formGroup].controls[formControlName].valid  
        - Create Custom VAlidator
            - The class that contains static method with input parameter as 'AbstractControl', this method returns 'any'
                - If the value is valid, the method will return null
                - If the value is invalid, then the method will return JSON as follows
                    - {invalid:true} / {valid:false}    
- Creating Custom Diretives
    - MAke sure that the Custom Directive class is declared in 'declarations' array of NgModule                          
- Using Angular Services
- Using Pipes
- Single Page App (SPA) in Angular using Routing
- Testing Angular
- BUild and creating Library Package 