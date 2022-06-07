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
