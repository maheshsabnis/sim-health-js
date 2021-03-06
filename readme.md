HTML
1. Tags
    - Input Tags
        - USed to Accept Data from ENd-User
        - Text, Select, RAdioButton, CheckBox
        - Input Elements
            - text, textbox
            - radio, radio button
            - check, checkbox
            - button, Button Element
            - month, date, time, week, color, email, tel, etc. (HTML 5 elements) 
        - All 'input' elements provides 'value' property to read/write data     
    - Collection Types
        - select with option
            - Dropdown List
        - ul with li, unordered list
        - ol with li, ordered list            
    - Layout
        - DEfine UI ARrangement of UI Elements in Browser
            - div, table, span, paragraph
            - table
                - thead, the header
                    - tr, the row with th as columns
                - tbody, the body
                    - tr, the row with td as cells
    - INteractive Elements
        - Events Based UI for USer Interaction
         - Button
    - HTML Element Property System
        - The 'id', used to identify element uniquely from DOM
        - The 'name', used to extract collection of DOM elements having 'same name' e.g. Element Collection OR Group
        - The 'class', used to extract collection of DOM elements having 'same name' e.g. Element Collection OR Group 

# JS Basics
1. window object
    - Represents an instance of Browser
        - Events
            - onload
            - onclose
2. document object
    - Represents HTML DOM loaded in the browser
    - USed to access HTML Elements from DOM to perform following operations
        - Access property of Element for Read/Write Operations
        - Access Element for attaching Events
        - Generate HTML Dynamically based on Data 
    - functions
        - getElementById('{id}'), extract single element based on 'id'
        - getElementsByName('{name}'), extract collection of elements
        - getElementsByClass('{class}'), extract collection of elements   
        - getElementsByTagName('{tag}'), return collection of elements of all matching tags
        - querySelector(CONDITION)
        - addEventListener(), used to attach an event to DOM Element
            - document.addEventListener('{EVENT-NAME}', function(){LOGIC-TO-EXECUTE}, BOOL-KEEP-EVENT-ATTACHED-TO-ELEMENT)
                - If true then the Function will always be attached with DOM Element
                - If false, then once the events raise is complete the function will be detached from Element         
    - VAriable is declared using 'var'              

# JS Programming (Included in TypeScript)
- Variable is declared using 'var'
- There is no explicit Data Type available
- Data TYpes are Parsed based on 'initial-value-of-variable'
    - e.g. var i = 10; 
        - here 'i' is number
    - Parsed Types
        - number, string, boolean
            - number includes 'integer' and 'floating' type values
            - string using '' or "" both are same
    - Complex Types with methods
        - object
            -  used to store Complex data like JSON data
                - e.g.
                    - {KEY:VALUE}
        - Date
            - USed to Manage Date Formats on Client-Side based on OS Date-Time settings
                - UTC Timings
        - function
            - Power of JS for Building 'MULTI-MODULE-APP'
            - Reference Functions
                - STore the function Implementation into a variable, and use it as a class 
                    - e.g.
                        - var obj = function(){......}
            - CLose Function aka Function Object
                - CReate a function, that returns an Object which we can use as class
                    - e.g.
                        - function MyObject(){...... return { PUBLIC METHODS }}
            - Immediatly Invokable Function Expression aka IIFE 
                - also known as 'Self-Executable' JavaScript
                - Also used to Create 'MODULE' in JavaScript            
        - Array also represented as '[]'         
            - STore large Data equal to Memory available for Browser
            - Methods
                - sort(), reverse(), search(), find(), indexOf(), lastIndexOf(), reduce(), splice(), slice(), shift(), unshift(), map() forEach(), filter() etc.

    - JSON object
        - A DEfault Singleton object for a current containing Function / Module / JS file
        - The JSON object can also have functions in it
        - Properties of JSON object can be accessed in its function using  'this'            
    - Array iteration
        - using 'for..loop' or 'for..in' loop

# Modular Programming with JS
1. Object
    - Schema with
        - Properties
            - Represents the metadata for 'DATA' stored ib object
        - Functions
            - Logic / operations / behavior for DATA
    - Every Type in JS is Object
        - Each Type has Properties and functions with it
    - Some Popular methods of Object     
        - Object.create(), create a new object with same schema from Original object 
        - Object.assign(), Clone an object from original object at new Location
    - A Property
        - Object.prototype
            - USed to extend an existing Object by adding new function in it    
2. Function objects
    - Reference Functions
        - Provides prototype to add an extended functions to an existing object
    - Close Functions
    - IIFE    
        - USe IIFE when the JS has to define 'Modules'  
            - Module: AN Encapsulated Objects with Private Functions in it
                - These functions will exposed only when returned
    - use 'parseInt(STRING)', to parse string as number
    - use 'parseFloat(STRIG)', to parse string with decimal point
3. JS DOM Events for UI
    - click
        - mouseenter + mouseleftbuttondown
    - change
        - input:text
            - keydown + keyup
        - select
            - mouseleftbuttondown
    - blur (LOST-FOCUS, press TAB on keyboard)
        - change event on input:text element for most of the popular browsers            
    - If using Collection Elements e.g. select, then first retrieve the selectedIndex and then get its text    
    - selectedIndex, is the selected 'option' index of the select element

# ES 6
    - Modern Specification for JavaScript for Front-End Development (and also on server-side for Nodejs)    
        - w3c
- Specifications
    - Block Scope for Variable (Say Bye-Bye to var)
    - Explicit Type System* (Only Supported by TypeScript)
        - Enhancements in Array and String classes
    - Object Mutation
        - SPread the Object with new properties w/o killing or redeclaring it
            - Known as 'spread'
            - Strings
                - Template String
            - Arrays
            - JSON objects  
        - New Collections (Modern JavaScript Only)
            - Set(), Like HashSet
            - Map(), Lke Dictionary
    - Arrow Operator
        - SImplification of Callback methods
        - =>
    - Usig object spread to pass variable number of parameters to a method            
        - ...
    - Object Oriented Programming
        - Class
        - Generics, interfaces, Access-Specifiers (Only in TypeScript)    
        - Inheritance
    - Asynchronous Programming
        - AJAX, By Microsoft
        - Ajax, Mozilla    
        - Promise
            - async/await (ES 8)
    - Sequence Generations (ES 7)
        - Iterators
        - Generators           
    - Proxy (ES 7)
        - Hide Original Object using the Proxy object      
    - Modules
        - Creaing Exportable Types so that they can be imported
- ES 6 Languages
    - High-Level JavaScript aka Modern JavaScript aka ES 6
        - USed by React, Vue.js, Ember, Node.js, etc.
            - Babel Transpiler
    - TypeScript by Microsoft
    - Dart
# TypeScript Specifications          

- Block Scope using 'let' keyword
- DataTYpes
    - number, string, boolean, date, object, any
    - Union Types
        - DEfine a variable with More-than-One datatype
        - let x: number|string;
    - COmplex Type
        - Array
            - BAsic Methods: push(), pop(), shift(), unShift(), indexOf(), lastIndexOf(), slice(), splice(), etc
            - ES 6 Methods
                - forEach(), map(), filter(), find(), reduce()
                - Iterations on Array using for..of loop
                - forEach(): Iterate and print elements / records from array. This metod does not return any value
                - map(),Iterate and can modify values from array based on condition, provided conditions satisfy, this return array with same length, but will have undefined values in output array for which the input array values does not satisfy condition
                - filter(), return an output array based on condition match on original array
                - find(): Return the first match     

        - String
            - search        
- Arrow OPerator Support
    - forEach((data,index)=>{.....logic.....})
- SPread Operator for PAssing variable number of parameters to method
    - function fn1(...data){}  
    - THis is also used to pass variable number of parameters to a method
- Union Types (Only in TypeScript)
    - DEfine a veariable using multiple Data Types    
- ES 6 COnstants
    - const
- Object class
    - Object.assign()
    - Object.keys(obj)
        - THe 'obj' is an instale of class or can be JSON object of which public property names can be read     
    - Object.values(obj), return value of each public property of obj     
- OOPs
    - Keywords
        - class
            - The 'constructor()' is a standard method
            - The  'constructor()' can directly declare data members those can be public, private.
        - interface
        - 'extends', keyword used for inheritance
              -   The derive class has an access of all public and protected members of the base class
              - The DErive class instace by default access base class ctor, so derived class instance by default pass parameters to base class ctor.
              - But if derive class defines an explicit ctor then it MUST call base class ctor using 'super()' call
              - If base class ctor accepts parameters, then derive class MUST pass these parameter values using super() call  
        - impements, used to implement interface by class
        - get, set for properties
        - public, private,
            - All members of class are public by default
        - static for methods
        - abstract*, needs to look for latest TypeScript release along with protected keyword 
        - namespace
- Generics
    - Only SUpported in TYpeScript
        - Generic Class
        - Interface
        - Method
    - Array<T> is a standard complex type for TYpeScript            
- Modules
    - export, to export array, function, class from file1
    - import, to imports exportable types from fil1 to file2           

- Transpilation
    - File.ts -----> TypeScript Compiler ------> Transform to JavaScript ------> File.js ------ Load in Browser for Execution

- Installing Transpiler
    - Download and Install Node.js
        - https://www.nodejs.org
            - THis will install 'npm' utility
    - Machine MUST have access to 
        - https://www.npmjs.com
            - Used for downloading all packages        
    - TypeScript
        - npm install -g typescript
            - install TypeScript for MAchine Scope (Global)
            - This will install 'tsc', the TypeScript Compiler on machine
                - tsc.bat

    - Application COnfiguration
        - Using 'package.json' file
            - Each ES 6 app (TypeScript, ES6) is a package
            - Each Package has dependencies (Runtime or DevTime/TestTime or both)    
            - ALl Packages needed by the current application MUST be specified in package.json
        - create package.json using the following command
            - npm init -y OR npm init -f
        - Important sections of package.josn
            - 'scripts'
                - contains all commands to build, test, run application
            - 'devDependencies'
                - contains list of all packages require during development and testing of application                    
                    - npm install --save-dev [PACKAGE-NAME]
            - 'dependencies'
                - Contains list of packages required to run/execute the application
                    - npm install --save [PACKAGE-NAME]
        - The 'npm install' command will add 'node_modules' folder in the current application     
- Command for Transpilation
    - tsc [SOURCE-FILE].ts
    - This will generate
        - [SOURCE-FILE].js           