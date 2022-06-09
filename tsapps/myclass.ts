class EmployeeObj {
    // lets define an indexer property for the CLass
    // This will inform to compiler that 'Each Public Property'
    // Can be read dynamically based on its appearing Index
    // indexer expression
    [x:string]:any; // x will be public property name of the class 
    // and 'any' will be any data type for the property i.e. number, string, boolean, date, etc.
    constructor(
        public EmpNo:number, //--> Index 0
        public EmpName:string, // --> Index 1
        public Salary:number
    ){}
}

let Employees:Array<EmployeeObj> = new Array<EmployeeObj>();
Employees.push(new EmployeeObj(1, 'A',100));
Employees.push(new EmployeeObj(2, 'B',200));

// List all properties
let obj:EmployeeObj = new EmployeeObj(0,'',0); 
let keys = Object.keys(obj);
console.log(`List of Properties = ${JSON.stringify(obj)}`);
// Lets print data from Array of MyCLass (Employees) for each REcord an its properties
// Here e is each employee record
for(let e of Employees){
    // here c is each property of the EmployeeObj Object
    for(let c of keys){
        // e[c] will product compiler error because 'e' is object and 'c' is string
        // so from TypeScript 4.0+ string indexes for reading data from object is not 
        // allowed 
        // To remove the Error, modify the EmployeeObj to define an 'indexer' property
        // to read values for the properties of the EMployeeObj dynamically 
        // w/o Hard-Coding
        console.log(`Record is = ${JSON.stringify(e[c])}`);
    }
}
