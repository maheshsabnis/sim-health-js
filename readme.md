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